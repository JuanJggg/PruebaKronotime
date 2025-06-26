import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products, formatPrice, Product } from '../../data/products';
import styles from './ProductSlider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        {product.tags.length > 0 && (
          <div className={styles.productTags}>
            {product.tags.map((tag) => (
              <span
                key={tag}
                className={`${styles.productTag} ${tag.toLowerCase() === 'descuento' ? styles.discount :
                  tag.toLowerCase() === 'nuevo' ? styles.new :
                    tag.toLowerCase() === 'premium' ? styles.premium : ''
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productBrand}>{product.brand}</div>
        <h3 className={styles.productTitle}>{product.title}</h3>
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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <section className={styles.sliderSection}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerItem} style={{ backgroundImage: `url('//co.malvaonline.com/cdn/shop/files/Sub_Banner_1_5.webp?v=1750188477')` }}>
            <div className={styles.bannerColumn}>
              <h2>Waimari</h2>
              <p>Crafted for island souls</p>
              <a href="#" className={styles.btn}>Buy Now</a>
            </div>
          </div>
          <div className={styles.bannerItem} style={{ backgroundImage: `url('//co.malvaonline.com/cdn/shop/files/Sub_Banner_2_5.webp?v=1750188544')` }}>
            <div className={styles.bannerColumn}>
              <h2>Sea Salt</h2>
              <p>Softness meets sophistication</p>
              <a href="#" className={styles.btn}>Buy Now</a>
            </div>
          </div>
          <div className={styles.bannerItem} style={{ backgroundImage: `url('//co.malvaonline.com/cdn/shop/files/Sub_Banner_3_Ami.webp?v=1749124316')` }}>
            <div className={styles.bannerColumn}>
              <h2>Ami Paris</h2>
              <p>Parisian cool with a modern twist</p>
              <a href="#" className={styles.btn}>Buy Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sliderSection}>
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
        <div className={styles.sliderControlsCta}>
          <h2>New Arrives at Malva</h2>
          <p>New GANNI just in bold, playful, and unmistakably Scandi.</p>
          <a href="#">Shop Now</a>
        </div>
      </section>

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

      <section className={styles.sliderSection}>
        <div className="container">
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

          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
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
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className={styles.sliderSectionContainerTwo}>
        <div className='container'>
          <div className={styles.heroContentTwo}>
            <h1 className={styles.heroTitleTwo}>Bags & Purses</h1>
            <p className={styles.heroSubtitleTwo}>Not just bags. Power pieces</p>
            <p className={styles.herominSubtitleTwo}>Buy Now</p>
          </div>
        </div>
      </section>

      <section className={styles.footerSection}>
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/MALVA_LOGO.svg?v=1719595977" alt="Malva Logo" />
          <h3>MALVA</h3>
          <p>La alquimia de la moda</p>
        </div>
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/MALVA_LOGO.svg?v=1719595977" alt="Malva Logo" />
          <h3>MALVA EDITION</h3>
          <p>En colaboracion con los mejores diseñadores</p>
        </div>
        <div className={styles.footerMain}>
          <img src="//co.malvaonline.com/cdn/shop/files/tipo_M_Exclusive.svg?v=1719596220" alt="Malva Exclusive" />
          <h3>MALVA EXCLUSIVE</h3>
          <p>Encuentra productos que solo consigues en Malva</p>
        </div>
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