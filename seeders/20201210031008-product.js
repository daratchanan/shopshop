'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'OLED TV 55" LG OLED55CXPTA.ATM',
        price: 74990,
        description:'AI Picture Pro removes noise, and optimizes contrast and saturation. The result is crisp, higher quality visuals.',
        total_sale: '8',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 1,
        img: 'https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443666/TV2_yvr2bd.jpg'
      },
      {
        name: 'OLED TV PHILIPS 55OLED804 55”',
        price: 48990,
        description:'PHILIPS Ambilight features intelligent LEDs around the edges of the TV, casting on-screen colors onto the walls in real time.',
        total_sale: '10',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 1,
        img: 'https://res.cloudinary.com/dftjxqj4u/image/upload/v1608370146/spx0wxpmr0xjqnmeoaqm.jpg'
      },
      {
        name: 'REFRIGERATOR BOSCH 21Q SILVER',
        price: 38990,
        description:'SbS Fridge net Capacity: 604 l / 21Q',
        total_sale: '12',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 2,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1607595035/upqsiglw4xzkheuxszt3.jpg"
      },
      {
        name: 'REFRIGERATOR TEKA 21Q BLACK',
        price: 69990,
        description:'SIDE-BY-SIDE REFRIGERATOR TEKA NFD 650 SBS 21Q BLACK',
        total_sale: '7',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 2,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1607595035/upqsiglw4xzkheuxszt3.jpg"
      },
      {
        name: 'REFRIGERATOR LG GC-B247KQDV 21.6Q STAINLESS',
        price: 33290,
        description:'Inverter Linear Compressor generates less internal friction, resulting in lower energy consumption.',
        total_sale: '10',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 2,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1607595035/upqsiglw4xzkheuxszt3.jpg"
      },
      {
        name: 'WALL AIR CONDITIONER MITSUBISHI 12283BTU INVERTER',
        price: 24600,
        description:'Inverter Compressor works quietly and effectively to create quick and cool air while keeping the low energy-consumption.',
        total_sale: '14',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 3,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443599/AIR1_hkg3un.jpg"
      },
      {
        name: 'WALL AIR CONDITIONER MITSUBISHI 8871BTU INVERTER',
        price: 39000,
        description:'Inverter Compressor works quietly while maintaining low energy-consumption.',
        total_sale: '18',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 3,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443599/AIR1_hkg3un.jpg"
      },
      {
        name: 'WALL AIR CONDITIONER DAIKIN 9200BTU INVERTER',
        price: 18300,
        description:'Swing-type Inverter system works effectively with lower energy-consumption.',
        total_sale: '75',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 3,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443599/AIR1_hkg3un.jpg"
      },
      {
        name: 'TATAMI FAN HATARI HT-S16R2 16" WHITE',
        price: 1290,
        description:'i-COMFORT automatically adjusts speed due to the environment temperature',
        total_sale: '55',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 4,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443608/FAN1_f5qpkf.jpg"
      },
      {
        name: 'SLIDE FAN SHARP PJ-SL181 JP 18" PINK',
        price: 1140,
        description:'3-Blade 18” propeller, wide airflow',
        total_sale: '59',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 4,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443608/FAN1_f5qpkf.jpg"
      },
      {
        name: 'TATAMI FAN SHARP PJ-SL163CG 16” GRAY',
        price: 830,
        description:'Height adjustment with push-button',
        total_sale: '52',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 4,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443608/FAN1_f5qpkf.jpg"
      },
      {
        name: 'WASHER & DRYER PANASONIC 10/6KG INVERTER',
        price: 48590,
        description:'Inverter system works effectively to make your fabric clean with low operation noise.',
        total_sale: '38',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 5,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443618/WASHING1_oef0oh.jpg"
      },
      {
        name: 'TOP LOAD WASHING MACHINE LG 13KG INVERTER',
        price: 9500,
        description:'Smart Inverter Technology eliminates wasted operation by efficiently controlling energy use.',
        total_sale: '42',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 5,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443504/WASHING2_ah9yae.jpg"
      },
      {
        name: 'TOP LOAD WASHING MACHINE SAMSUNG 10KG',
        price: 7490,
        description:'Wobble pulsators generate a dynamic, multi-directional washing flow that prevents tangles and increases washing power.',
        total_sale: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 5,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443504/WASHING2_ah9yae.jpg"
      },
      {
        name: 'STEAM IRON 270ML',
        price: 1690,
        description:'40g/minute steam output, to gently soften clothes for easier ironing. 150g/min steam shot deep into fabrics at speed, removing even the most stubborn creases.',
        total_sale: '62',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 6,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443622/IRON2_gebjd6.jpg"
      },
      {
        name: 'STEAM IRON 200ML',
        price: 690,
        description:'Vertical steam is suitable for delicate fabric details.',
        total_sale: '38',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 6,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443656/IRON1_dwp4rw.jpg"
      },
      {
        name: 'STEAM IRON ELECTROLUX ESI5226 0.3L',
        price: 1290,
        description:'Inverter system works effectively to make your fabric clean with low operation noise.',
        total_sale: '41',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 6,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443656/IRON1_dwp4rw.jpg"
      },
      {
        name: 'STEAM IRON PHILIPS GC2992/70 320ML',
        price: 1490,
        description:'Inverter system works effectively to make your fabric clean with low operation noise.',
        total_sale: '42',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 6,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443656/IRON1_dwp4rw.jpg"
      },
      {
        name: 'APPLE Macbook Air 2020 (13.3", Ram 8GB, 512GB, Gold)',
        price: 42900,
        description:'Stunning 13.3-inch Retina display with True Tone technology',
        total_sale: '70',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 7,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443637/Macbook1_brvwjp.jpg"
      },
      {
        name: 'DELL Gaming Notebook',
        price: 25700,
        description:'(15.6", Intel Core i5, RAM 8 GB, 1 TB+256 GB) W56636000THW10-G3-BK',
        total_sale: '45',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 7,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443637/Macbook1_brvwjp.jpg"
      },
      {
        name: 'ASUS Gaming Notebook',
        price: 39000,
        description:'(15.6", Intel Core i5, Ram 8GB, 512GB, Bonfire Black) FX506LH-HN004T + Bag',
        total_sale: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 7,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443637/Macbook1_brvwjp.jpg"
      },
      {
        name: 'APPLE iPhone 11 (64GB, Black)',
        price: 21900,
        description:'Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps',
        total_sale: '80',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 8,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608444561/phone_aexqyx.jpg"
      },
      {
        name: 'HUAWEI Nova 7SE (Space Silver)',
        price: 10900,
        description:'CPU: Kirin 820',
        total_sale: '55',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 8,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443641/PHONE1_ux2tuk.jpg"
      },
      {
        name: 'HUAWEI P40 (Deep Sea Blue)',
        price: 20900,
        description:'OS: EMUI10 (Based On Android 10)',
        total_sale: '49',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 8,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443641/PHONE1_ux2tuk.jpg"
      },
      {
        name: 'SAMSUNG Galaxy Note 10+ (256GB, Aura Glow)',
        price: 24800,
        description:'Display: 6.8" Quad HD+ Dynamic AMOLED Infinity-O Display (3040x1440)',
        total_sale: '22',
        createdAt: new Date(),
        updatedAt: new Date(),
        productType_id: 8,
        img: "https://res.cloudinary.com/dftjxqj4u/image/upload/v1608443641/PHONE1_ux2tuk.jpg"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
