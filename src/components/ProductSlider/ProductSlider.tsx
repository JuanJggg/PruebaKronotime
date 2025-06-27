import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { NavigationOptions } from 'swiper/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products, formatPrice, Product } from '../../data/products';
import styles from './ProductSlider.module.css';

// Importación de estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * Componente de tarjeta de producto individual
 * Muestra imagen, marca, título y precios con descuentos
 */
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      {/* Container de imagen con aspect ratio fijo */}
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      {/* Información del producto */}
      <div className={styles.productInfo}>
        <div className={styles.productBrand}>{product.brand}</div>
        <h3 className={styles.productTitle}>{product.title}</h3>

        {/* Precios con lógica de descuento */}
        <div className={styles.productPricing}>
          <span className={styles.productPrice}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className={styles.productOriginalPrice}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductSlider: React.FC = () => {
  // Referencias para controles personalizados de navegación de Swiper
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* Sección de banners promocionales en grid */}
      <section className={styles.sliderSection}>
        <div className={styles.bannerContainer}>
          {/* Banner Waimari */}
          <div className={styles.bannerItem} style={{ backgroundImage: `url('//co.malvaonline.com/cdn/shop/files/Sub_Banner_1_5.webp?v=1750188477')` }}>
            <div className={styles.bannerColumn}>
              <h2>Waimari</h2>
              <p>Crafted for island souls</p>
              <a href="#" className={styles.btn}>Buy Now</a>
            </div>
          </div>
          {/* Banner Sea Salt */}
          <div className={styles.bannerItem} style={{ backgroundImage: `url('//co.malvaonline.com/cdn/shop/files/Sub_Banner_2_5.webp?v=1750188544')` }}>
            <div className={styles.bannerColumn}>
              <h2>Sea Salt</h2>
              <p>Softness meets sophistication</p>
              <a href="#" className={styles.btn}>Buy Now</a>
            </div>
          </div>
          {/* Banner Ami Paris */}
          <div className={styles.bannerItem} style={{ backgroundImage: `url('//co.malvaonline.com/cdn/shop/files/Sub_Banner_3_Ami.webp?v=1749124316')` }}>
            <div className={styles.bannerColumn}>
              <h2>Ami Paris</h2>
              <p>Parisian cool with a modern twist</p>
              <a href="#" className={styles.btn}>Buy Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Styling with Malva" con galería de imágenes */}
      <section className={styles.sliderSection}>
        {/* Grid de imágenes de estilo */}
        <h1 className={styles.sectionTitlePrimary}>Styling with Malva</h1>
        <div className={styles.bannerProducts}>
          <div className={styles.bannerProductsCard}>
            <img src="//co.malvaonline.com/cdn/shop/files/Wedding_season_1.jpg?v=1750188663" alt="" />
          </div>
          <div className={styles.bannerProductsCard}>
            <img src="//co.malvaonline.com/cdn/shop/files/Wedding_season_2.jpg?v=1750188702" alt="" />
          </div>
          <div className={styles.bannerProductsCard}>
            <img src="//co.malvaonline.com/cdn/shop/files/Wedding_season_3.jpg?v=1750188726" alt="" />
          </div>
          <div className={styles.bannerProductsCard}>
            <img src="//co.malvaonline.com/cdn/shop/files/Wedding_season_4.jpg?v=1750188778" alt="" />
          </div>
        </div>

        {/* CTA section con texto promocional */}
        <div className={styles.sliderControlsCta}>
          <h2>New Arrives at Malva</h2>
          <p>New GANNI just in bold, playful, and unmistakably Scandi.</p>
          <a href="#">Shop Now</a>
        </div>
      </section>

      {/* Hero section GANNI con imagen de fondo */}
      <section className={styles.sliderSectionContainer}>
        <section className={styles.hero}>
          <div className='container'>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>GANNI</h1>
              <p className={styles.heroSubtitle}>Playful by nature, effortless by design</p>
              <p className={styles.herominSubtitle}>Buy Now</p>
            </div>
          </div>
        </section>
      </section>

      {/* Slider de productos con Swiper */}
      <section className={styles.sliderSection}>
        <div className="container">
          {/* Header con controles de navegación personalizados */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}></h2>
            <div className={styles.sliderControls}>
              <button
                ref={prevRef}
                className={styles.sliderButton}
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                ref={nextRef}
                className={styles.sliderButton}
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Swiper container con configuración responsiva */}
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                const navigation = swiper.params.navigation as NavigationOptions;
                if (navigation) {
                  navigation.prevEl = prevRef.current;
                  navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }

              }}
              // Breakpoints responsivos para diferentes tamaños de pantalla
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 24,
                },
              }}
              className={styles.swiper}
            >
              {/* Renderizado de productos desde el array de datos */}
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Hero section Bags & Purses con contenido alineado a la derecha */}
      <section className={styles.sliderSectionContainerTwo}>
        <div className='container'>
          <div className={styles.heroContentTwo}>
            <h1 className={styles.heroTitleTwo}>Bags & Purses</h1>
            <p className={styles.heroSubtitleTwo}>Not just bags. Power pieces</p>
            <p className={styles.herominSubtitleTwo}>Buy Now</p>
          </div>
        </div>
      </section>

      {/* Footer section con información de marca */}
      <section className={styles.footerSection}>

        {/* Malva principal */}
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/MALVA_LOGO.svg?v=1719595977" alt="Malva Logo" />
          <h3>MALVA</h3>
          <p>La alquimia de la moda</p>
        </div>

        {/* Malva Edition */}
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/MALVA_LOGO.svg?v=1719595977" alt="Malva Logo" />
          <h3>MALVA EDITION</h3>
          <p>En colaboracion con los mejores diseñadores</p>
        </div>

        {/* Malva Exclusive */}
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/tipo_M_Exclusive.svg?v=1719596220" alt="Malva Exclusive" />
          <h3>MALVA EXCLUSIVE</h3>
          <p>Encuentra productos que solo consigues en Malva</p>
        </div>

        {/* Sostenibilidad */}
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/tipo_Sostenible.svg?v=1719596220" alt="Malva Sostenible" />
          <h3>SOSTENIBILIDAD</h3>
          <p>Apoyamos a diseñadores con practicas sostenibles</p>
        </div>
      </section>
    </>

  );
};

export default ProductSlider;