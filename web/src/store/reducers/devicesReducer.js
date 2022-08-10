import { initState } from '../initState';

export const devicesInit = [
  {
    id: 1,
    model: 'IPhone 12',
    description:
      'iPhone 13. Самая совершенная система двух камер на iPhone. Режим «Киноэффект» делает из видео настоящее кино. Супербыстрый чип A15 Bionic. Неутомимый аккумулятор. Прочный корпус. И еще более яркий дисплей Super Retina XDR.',
    price: '1000',
    type: 'phone',
    color: 'silver',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 2,
    model: 'IPhone 13',
    description: '128mb',
    price: '1100',
    type: 'phone',
    color: 'black',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 3,
    model: 'IPhone X',
    description: '64mb',
    price: '900',
    type: 'phone',
    color: 'gold',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 4,
    model: 'IPhone 12 mini',
    description: '256mb',
    price: '700',
    type: 'phone',
    color: 'silver',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 5,
    model: 'IPhone 13 mini',
    description: '256mb',
    price: '800',
    type: 'phone',
    color: 'blue',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 6,
    model: 'IPhone 11',
    description: '256mb',
    price: '1100',
    type: 'phone',
    color: 'green',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 7,
    model: 'IPhone 11 pro',
    description: '256mb',
    price: '1300',
    type: 'phone',
    color: 'green',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 8,
    model: 'IPhone 11 pro Max',
    description: '512mb',
    price: '1500',
    type: 'phone',
    color: 'midnight',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 9,
    model: 'IPad Air',
    description: '256mb',
    price: '1000',
    type: 'tablet',
    color: 'silver',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 10,
    model: 'MacBook Air',
    description: '512mb',
    price: '1300',
    type: 'laptop',
    color: 'silver',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 11,
    model: 'MacBook Pro',
    description: '1tb',
    price: '2000',
    type: 'laptop',
    color: 'space gray',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
  {
    id: 12,
    model: 'Apple watch SE',
    description: '40mm',
    price: '500',
    type: 'watch',
    color: 'black',
    picture:
      'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
  },
];

export const devicesReducer = (state = initState.devices, action) => {
  switch (action.type) {
    case '':
      return;

    default:
      return state;
  }
};
