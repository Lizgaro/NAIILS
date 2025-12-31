import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cyber Chrome & 3D',
    price: '3 500 ₽',
    duration: '120 мин',
    description: 'Металлик, объёмные фигуры, корейский стиль. Главный тренд 2026.'
  },
  {
    id: '2',
    title: 'Японский Эко-Глянец',
    price: '2 500 ₽',
    duration: '60 мин',
    description: 'Глубокое восстановление и натуральный блеск без покрытия.'
  },
  {
    id: '3',
    title: 'Smart Педикюр',
    price: '3 200 ₽',
    duration: '90 мин',
    description: 'Инновационная техника обработки стоп дисками. Идеальная гладкость.'
  },
  {
    id: '4',
    title: 'Lux Gel Покрытие',
    price: '2 800 ₽',
    duration: '90 мин',
    description: 'Укрепление гелем, идеальные блики, чистый комбинированный маникюр.'
  }
];

export const TIME_SLOTS = [
  '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'
];