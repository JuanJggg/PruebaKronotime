export interface Product {
  id: number;
  image: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  category: 'man' | 'woman';
}

export const products: Product[] = [
  {
    id: 1,
    image: '//co.malvaonline.com/cdn/shop/files/F9005VESTBLK-1.jpg?v=1748122394',
    brand: 'GANNI',
    title: 'Vestido Cotton Poplin Tie String',
    price: 1400000,
    originalPrice: 3200000,
    tags: ['Nuevo', 'Descuento'],
    category: 'woman'
  },
  {
    id: 2,
    image: '//co.malvaonline.com/cdn/shop/files/W0378BLUBLK-1.jpg?v=1748122519',
    brand: 'GANNI',
    title: 'Blusa Washed Stretch Cotton Tie Strap',
    price: 1600000,
    tags: ['Tendencia'],
    category: 'woman'
  },
  {
    id: 3,
    image: '//co.malvaonline.com/cdn/shop/files/K2427SUDBLK-1.jpg?v=1748122414',
    brand: 'GANNI',
    title: 'Sweater Graphic Wool Mix Baseball',
    price: 2000000,
    originalPrice: 3500000,
    tags: ['Premium', 'Descuento'],
    category: 'woman'
  },
  {
    id: 4,
    image: '//co.malvaonline.com/cdn/shop/files/T3590CAMGREY-1.jpg?v=1748122478',
    brand: 'GANNI',
    title: 'Camiseta Basic Jersey Ganni Relaxed',
    price: 600000,
    tags: ['Deportivo'],
    category: 'woman'
  },
  {
    id: 5,
    image: '//co.malvaonline.com/cdn/shop/files/T3561CAMWHIT-1.jpg?v=1748122472',
    brand: 'GANNI',
    title: 'Camiseta Thin Jersey Relaxed O-Neck',
    price: 600000,
    tags: ['Elegante'],
    category: 'woman'
  },
  {
    id: 6,
    image: '//co.malvaonline.com/cdn/shop/files/T4149BLUSAWHI-1.jpg?v=1748122503',
    brand: 'GANNI',
    title: 'Blusa Heavy Cotton Tie Back Waisted',
    price: 1400000,
    originalPrice: 1800000,
    tags: ['Casual', 'Descuento'],
    category: 'woman'
  },
  {
    id: 7,
    image: '//co.malvaonline.com/cdn/shop/files/T4007CAMBLUE-1.jpg?v=1748122497',
    brand: 'GANNI',
    title: 'Camiseta Basic Jersey Tiger Relaxed',
    price: 800000,
    tags: ['Deportivo', 'Nuevo'],
    category: 'woman'
  },
  {
    id: 8,
    image: '//co.malvaonline.com/cdn/shop/files/T3529WHIT-1.jpg?v=1740407651',
    brand: 'GANNI',
    title: 'Camiseta Relajada de Melocoton',
    price: 800000,
    tags: ['Premium', 'Elegante'],
    category: 'woman'
  },
  {
    id: 9,
    image: '//co.malvaonline.com/cdn/shop/files/J1714PANTBLUE-1.jpg?v=1748122408',
    brand: 'GANNI',
    title: 'Jeans Betzy Cropped',
    price: 2000000,
    tags: ['Tendencia'],
    category: 'woman'
  },
  {
    id: 10,
    image: '//co.malvaonline.com/cdn/shop/files/J1581CHAQMULT-1.jpg?v=1748122400',
    brand: 'GANNI',
    title: 'Chaqueta Print Denim',
    price: 2600000,
    originalPrice: 3400000,
    tags: ['Básico', 'Descuento'],
    category: 'woman'
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};