export default async function handler(req, res) {
    // CORS configuration
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt, image, mimeType } = req.body;

        // Support both naming conventions for compatibility
        const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'Server API key configuration missing' });
        }

        // Construct the request body for Gemini API
        const requestBody = {
            contents: [{
                parts: [
                    // If image is present, include it (Edit Mode)
                    ...(image ? [{ inlineData: { mimeType: mimeType || 'image/jpeg', data: image } }] : []),
                    // Include the text prompt
                    { text: prompt }
                ]
            }],
            // Disable safety filters as per previous configuration
            safetySettings: [
                { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
            ]
        };

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || response.statusText);
        }

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]) {
            // Return the raw text/content part
            return res.status(200).json({
                result: data.candidates[0].content.parts[0].text,
                // If the model actually returns an inline image (rare for this endpoint structure but possible), handle it
                inlineData: data.candidates[0].content.parts.find(p => p.inlineData)?.inlineData
            });
        }

        return res.status(500).json({ error: 'No content generated' });

    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}
