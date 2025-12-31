import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl relative z-10 flex flex-col animate-slide-up overflow-hidden text-black selection:bg-secret-pink selection:text-white">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white sticky top-0 z-20">
            <h2 className="font-serif text-2xl italic text-vogue-black">Политика Конфиденциальности</h2>
            <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black"
            >
                <X size={24} />
            </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-8 font-sans text-sm text-gray-600 leading-relaxed space-y-6">
            <p className="font-bold text-black">Редакция от 01.01.2026</p>
            
            <section>
                <h3 className="font-bold text-black uppercase mb-3 text-xs tracking-widest">1. Общие положения</h3>
                <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые студией Mari Nails (далее — Оператор).</p>
                <p className="mt-2">1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
                <p className="mt-2">1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://marinails.com.</p>
            </section>

            <section>
                <h3 className="font-bold text-black uppercase mb-3 text-xs tracking-widest">2. Основные понятия</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><b>Автоматизированная обработка персональных данных</b> – обработка персональных данных с помощью средств вычислительной техники.</li>
                    <li><b>Блокирование персональных данных</b> – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</li>
                    <li><b>Веб-сайт</b> – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://marinails.com.</li>
                    <li><b>Персональные данные</b> – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта.</li>
                    <li><b>Пользователь</b> – любой посетитель веб-сайта https://marinails.com.</li>
                </ul>
            </section>

             <section>
                <h3 className="font-bold text-black uppercase mb-3 text-xs tracking-widest">3. Обработка данных</h3>
                <p className="mb-2">Оператор может обрабатывать следующие персональные данные Пользователя:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Фамилия, имя, отчество.</li>
                    <li>Номер телефона.</li>
                    <li>Электронная почта.</li>
                    <li>Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика, Google Analytics и других).</li>
                </ul>
            </section>

            <section>
                <h3 className="font-bold text-black uppercase mb-3 text-xs tracking-widest">4. Цели обработки</h3>
                <p>4.1. Цель обработки персональных данных Пользователя — запись на услуги салона; информирование Пользователя посредством отправки электронных писем; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.</p>
                <p className="mt-2">4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты info@marinails.com.</p>
            </section>

            <section>
                <h3 className="font-bold text-black uppercase mb-3 text-xs tracking-widest">5. Правовые основания</h3>
                <p>5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</p>
                <p className="mt-2">5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).</p>
            </section>

            <section>
                <h3 className="font-bold text-black uppercase mb-3 text-xs tracking-widest">6. Порядок сбора и хранения</h3>
                <p>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</p>
                <p className="mt-2">6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
                <p className="mt-2">6.2. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора info@marinails.com с пометкой «Отзыв согласия на обработку персональных данных».</p>
            </section>
        </div>
        
        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
                onClick={onClose}
                className="bg-vogue-black text-white px-10 py-3 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-secret-hot transition-colors shadow-lg"
            >
                Понятно
            </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;