export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  image: string;
  link: string;
}

export const products = [
  {
    id: 10101,
    name: 'Apple AirPods Pro',
    price: 446,
    description:
      'Tinnitus with noise-cancelling boosts that continuously optimize sound based on your ear shape and position.',
    rating: '4.8 / 5',
    image: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-MLWK3AM-A-AirPods-Pro/dp/B09JQMJHXY/ref=sr_1_3?crid=3PV5KI4KEJ4IQ&keywords=apple&qid=1647107331&sprefix=app%2Caps%2C779&sr=8-3',
     
  },

  {
    id: 10111,
    name: 'Apple AirPods Max - Green',
    price: 389.12,
    description:
      'A completely new take on over-ear headphones.',
    rating: '4.6 / 5', 
    image: 'https://m.media-amazon.com/images/I/81FnSOE94NL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/dp/B08PZDSP2Z/ref=fs_a_mdt2_us0?th=1',
  },
  {
    id: 10112,
    name: 'Apple AirPods (2nd Generation)',
    price: 400,
    description:
      'Unique wireless earphones last for a long time without recharging.',
    rating: '4.8 / 5',
    image: 'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/dp/B07PXGQC1Q/ref=fs_a_mdt2_us3',
  },
  {
    id: 10113,
    name: 'Apple Watch Series 5 (GPS, 40MM) - Gold Aluminum Case with Pink Sand Sport Band (Renewed)',
    price: 213,
    description:
      'Premium smart watch.',
    rating: '4.5 / 5',
    image: 'https://m.media-amazon.com/images/I/71luYyAPVTL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-Watch-GPS-40MM-Aluminum/dp/B083M6YZKT/ref=sr_1_8?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647117747&sprefix=apple%2Caps%2C339&sr=8-8&th=1',
  },
  {
    id: 10114,
    name: 'Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)',
    price: 274,
    description:
      'Premium smart watch.',
    rating: '4.5 / 5',
    image: 'https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/New-Apple-Watch-GPS-44mm/dp/B08KTW1YD3/ref=sr_1_13?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647117747&sprefix=apple%2Caps%2C339&sr=8-13',
  },
  {
    id: 101115,
    name: '[Apple MFi Certified] Lightning to HDMI Digital AV Adapter,4K Lightning Digital AV Audio Adapter,HDMI Sync Screen with Charging Port Compatible for iPhone 13/12/11/X/8,iPad on HDTV,Monitor,Projector.',
    price: 19.99,
    description:
      'Apple MFi Certified Lightning to HDMI Digital AV Audio Sync Screen with Charging Port for iPhone, iPad, iPod',
    rating: '4.3 / 5',
    image: 'https://m.media-amazon.com/images/I/51xxdlfpz7L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Certified-Lightning-Charging-Compatible-Projector/dp/B09SLPM4M1/ref=sr_1_18_sspa?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647118280&sprefix=apple%2Caps%2C339&sr=8-18-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyS0xCR09QNjE4TkpDJmVuY3J5cHRlZElkPUExMDAwNjE2MlFHU1EzUUFFRTI2MiZlbmNyeXB0ZWRBZElkPUEwMjc2MzkwMUJIUjFVN1ZKMkdZOSZ3aWRnZXROYW1lPXNwX2F0Zl9uZXh0JmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
  },
  {
    id: 101116,
    name: 'Apple Pencil (1st Generation)',
    price: 99,
    description:
      'Features the precision, responsiveness, and natural fluidity of a traditional writing instrument and the versatility to become so much more.',
    rating: '4,8 / 5',
    image: 'https://m.media-amazon.com/images/I/518fIB5GHlL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-MK0C2AM-A-Apple-Pencil/dp/B016NY7784/ref=sr_1_44?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647118468&sprefix=apple%2Caps%2C339&sr=8-44',
  },
  {
    id: 10117,
    name: 'Apple Magic Keyboard with Numeric Keypad - US English, Includes Lighting to USB Cable, Silver',
    price: 168,
    description:
      'Magic Keyboard with Numeric Keypad features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys for gaming',
    rating: '4.8 / 5',
    image: 'https://m.media-amazon.com/images/I/718oX4EkcGL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-Keyboard-Numeric-Wireless-Rechargable/dp/B071ZZTNBM/ref=sr_1_61?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647118727&sprefix=apple%2Caps%2C339&sr=8-61',
  },
  {
    id: 10118,
    name: 'Apple MacBook Pro 13.3" with Retina Display, M1 Chip with 8-Core CPU and 8-Core GPU, 16GB Memory, 512GB SSD, Silver, Late 2020',
    price: 1639.99,
    description:
      'High-end equipment that provides the most comfortable working conditions',
    rating: '4.1 / 5',
    image: 'https://m.media-amazon.com/images/I/51pWDiO9CrL._AC_SL1200_.jpg',
    link: 'https://www.amazon.com/Apple-MacBook-Pro-8-core-Silver/dp/B091V55WNY/ref=sr_1_97?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647118935&sprefix=apple%2Caps%2C339&sr=8-97',
  },
  {
    id: 10110,
    name: '2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Green (4th Generation',
    price: 599,
    description:
      'A tablet manufactured by Apple.',
    rating: '4.8 / 5',
    image: 'https://m.media-amazon.com/images/I/71wm6xK34sL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-iPad-Air-10-9-inch-Wi-Fi-64GB/dp/B08J6FD94H/ref=sr_1_2?crid=1V31CL6F8O0LZ&keywords=ipad&qid=1647119422&sprefix=ipad%2Caps%2C315&sr=8-2',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/