import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Header: React.FC = () => {
  // Menús de navegación para diferentes categorías
  const mujerMenu = [
    'Ir a inicio',
    'New in',
    'Malva Edition',
    'Ropa',
    'Calzado',
    'Diseñadores',
    'Accesorios',
    'Joyería',
    'Outlet',
  ];

  const hombreMenu = [
    'Ir a inicio',
    'Novedades',
    'Diseñadores',
    'Ropa',
    'Calzado',
    'Outlet',
  ];

  // Estados para controlar el menú móvil y la categoría seleccionada
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'Mujer' | 'Hombre'>('Mujer');

  // Hook personalizado para detectar dirección de scroll y posición
  const { scrollDirection, isAtTop } = useScrollDirection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Container principal con imagen de fondo responsiva */}
      <div className={styles.containerTwo}>
        <header className={`${styles.header} ${scrollDirection === 'down' ? styles.hidden : ''} ${!isAtTop ? styles.scrolled : ''}`}>
          {/* Banner promocional con animación marquee */}
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              Suscríbete hoy y recibe un 10% de descuento en tu primera compra
            </div>
          </div>

          {/* Navegación principal */}
          <nav className={styles.navigation}>
            <div className={styles.navContainer}>
              <div className={styles.desktopNav}>
                {/* Botón de menú hamburguesa para móvil */}
                <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Abrir menú">
                  <Menu size={24} />
                </button>

                {/* Logo SVG con diseño personalizado */}
                <a href="#" className={styles.logo} aria-label="Malva Department Store">
                  <svg width="100" height="70" viewBox="0 0 82 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.27925 36.6056H10.2157C11.067 36.6056 11.7055 37.1589 11.7055 38.0528C11.7055 38.8615 11.1521 39.4574 10.3434 39.4574H9.27925V36.6056ZM9.66234 36.7758V39.2872H10.3008C10.8542 39.2872 11.2798 38.819 11.2798 38.0528C11.2798 37.2441 10.8116 36.7758 10.2157 36.7758H9.66234Z" fill="currentColor"></path>
                    <path d="M13.6203 36.6056H15.6208V36.7758H14.0033V37.9251H15.4931V38.0953H14.0033V39.3297H15.6634V39.5H13.6203V36.6056Z" fill="currentColor"></path>
                    <path d="M17.5804 36.6056H18.5169C19.1553 36.6056 19.581 36.9461 19.581 37.4569C19.581 37.9677 19.1553 38.3082 18.5169 38.3082H17.9635V39.5H17.5379L17.5804 36.6056ZM18.0061 36.7758V38.1379H18.4317C18.8574 38.1379 19.1979 37.8825 19.1979 37.4569C19.1979 37.0312 18.9 36.7758 18.4317 36.7758H18.0061Z" fill="currentColor"></path>
                    <path d="M22.9009 38.6061H21.5388L21.1558 39.4574H20.9429L22.1773 36.6056H22.3901L23.7097 39.4574H23.2414L22.9009 38.6061ZM21.624 38.4359H22.8584L22.2199 37.0738L21.624 38.4359Z" fill="currentColor"></path>
                    <path d="M25.5382 36.6056H26.5172C27.1557 36.6056 27.5813 36.9035 27.5813 37.4143C27.5813 37.84 27.326 38.0954 26.8577 38.1805L27.709 39.4574H27.2834L26.4321 38.1805H25.9213V39.4574H25.4957L25.5382 36.6056ZM25.9213 36.7758V38.0528H26.3895C26.8152 38.0528 27.1131 37.84 27.1131 37.4143C27.1131 36.9887 26.8152 36.7758 26.3895 36.7758H25.9213Z" fill="currentColor"></path>
                    <path d="M29.1149 36.6056H31.6262V36.7758H30.5621V39.4574H30.1364V36.7758H29.0723L29.1149 36.6056Z" fill="currentColor"></path>
                    <path d="M34.9033 38.9041L35.9675 36.6056H36.3931V39.4574H35.9675V37.0312L34.9459 39.3297H34.6905L33.5412 37.0312V39.4574H33.371V36.6056H33.7966L34.9033 38.9041Z" fill="currentColor"></path>
                    <path d="M38.4362 36.6056H40.4368V36.7758H38.8193V37.9251H40.3091V38.0953H38.8193V39.3297H40.4794V39.5H38.4362V36.6056Z" fill="currentColor"></path>
                    <path d="M42.5642 39.4574H42.394V36.6056H42.5642L44.6073 38.8615V36.6056H44.7776V39.4574H44.6073L42.5642 37.2015V39.4574Z" fill="currentColor"></path>
                    <path d="M46.5235 36.6056H49.0348V36.7758H47.9707V39.4574H47.5451V36.7758H46.4809C46.5235 36.7758 46.5235 36.6056 46.5235 36.6056Z" fill="currentColor"></path>
                    <path d="M54.314 37.8825C54.9099 38.1379 55.2078 38.3082 55.2078 38.7764C55.2078 39.2446 54.8673 39.5 54.1863 39.5C53.4627 39.5 53.037 39.202 53.037 38.6061H53.4627C53.4627 39.0318 53.7181 39.3297 54.2289 39.3297C54.5694 39.3297 54.8248 39.202 54.8248 38.8615C54.8248 38.5636 54.6119 38.4359 53.9735 38.1805C53.4627 37.9251 53.1222 37.7974 53.1222 37.3292C53.1222 36.861 53.4201 36.6056 54.1012 36.6056C54.7822 36.6056 55.1653 36.9035 55.1653 37.4143H54.7396C54.7396 37.0312 54.5268 36.7758 54.1012 36.7758C53.7181 36.7758 53.5052 36.9461 53.5052 37.2441C53.5052 37.542 53.7606 37.6697 54.314 37.8825Z" fill="currentColor"></path>
                    <path d="M56.7387 36.6056H59.25V36.7758H58.1859V39.4574H57.7603V36.7758H56.6961L56.7387 36.6056Z" fill="currentColor"></path>
                    <path d="M62.1456 36.6056C62.9969 36.6056 63.5928 37.2015 63.5928 38.0528C63.5928 38.9041 62.9969 39.5 62.1456 39.5C61.2943 39.5 60.6984 38.8615 60.6984 38.0528C60.6984 37.2441 61.3369 36.6056 62.1456 36.6056ZM62.1456 39.3297C62.7415 39.3297 63.1672 38.7764 63.1672 38.0102C63.1672 37.2441 62.7415 36.6907 62.1456 36.6907C61.5497 36.6907 61.1241 37.2441 61.1241 38.0102C61.1241 38.819 61.5923 39.3297 62.1456 39.3297Z" fill="currentColor"></path>
                    <path d="M66.4866 36.6056C67.1251 36.6056 67.5508 36.9035 67.5508 37.4143C67.5508 37.84 67.2954 38.0954 66.8271 38.1805L67.6785 39.4574H67.2528L66.4015 38.1805H65.8907V39.4574H65.4651V36.6056H66.4866ZM65.9333 36.7758V38.0528H66.4015C66.8271 38.0528 67.1251 37.84 67.1251 37.4143C67.1251 36.9887 66.8271 36.7758 66.4015 36.7758H65.9333Z" fill="currentColor"></path>
                    <path d="M69.552 36.6056H71.5526V36.7758H69.9351V37.9251H71.4249V38.0953H69.9351V39.3297H71.5952V39.5H69.552V36.6056Z" fill="currentColor"></path>
                    <path d="M13.0249 17.9622V26.9009L14.2167 27.7947V28.1353H8.93865V27.7947L10.1305 26.9009V18.6007L6.21449 25.7942H5.70371L1.5749 18.6007V26.9009L2.76672 27.7947V28.1353H0V27.7947L1.19182 26.9434V18.0899L0 17.0684V16.7278H4.00111L7.44887 22.6444L10.6412 16.7278H14.2167V17.0684L13.0249 17.9622Z" fill="currentColor"></path>
                    <path d="M32.8592 27.8373V28.1778H27.6237V27.8373L28.5601 26.8583L27.496 24.7301H22.6861L21.7071 26.9434L23.0692 27.7947V28.1353H20.0471V27.7947L21.2815 26.9434L25.7934 16.7278H26.5595L31.8376 26.7732L32.8592 27.8373ZM27.3257 24.3895L24.9846 19.7925H24.8995L22.8564 24.3895H27.3257Z" fill="currentColor"></path>
                    <path d="M48.9505 24.049V28.1353H38.7349V27.7947L39.9692 26.9009V17.9622L38.7349 17.0684V16.7278H44.098V17.0684L42.8637 17.9622V27.7947H45.8006L48.5674 24.049C48.6099 24.049 48.9505 24.049 48.9505 24.049Z" fill="currentColor"></path>
                    <path d="M65.8903 17.0684L64.6985 17.9197L60.2717 28.1353H59.5056L54.2701 18.0899L53.2911 17.0684V16.7278H58.484V17.0684L57.5476 18.0048L61.123 25.0706H61.2082L64.3154 17.9197L62.9533 17.0684V16.7278H65.9329L65.8903 17.0684Z" fill="currentColor"></path>
                    <path d="M81.9808 27.8373V28.1778H76.7453V27.8373L77.6817 26.8583L76.6176 24.7301H71.8078L70.8288 26.9434L72.1909 27.7947V28.1353H69.1688V27.7947L70.4031 26.9434L74.915 16.7278H75.6812L80.9593 26.7732L81.9808 27.8373ZM76.4474 24.3895L74.1063 19.7925H73.9786L71.9355 24.3895H76.4474Z" fill="currentColor"></path>
                    <path d="M21.7934 6.00236H21.1123V6.42801H22.3041V6.76853H20.6867V4.93824H22.219V5.27876H21.0698V5.61928H21.7508V6.00236H21.7934Z" fill="currentColor"></path>
                    <path d="M25.0291 5.40624C24.9014 5.32111 24.6886 5.19341 24.3906 5.19341C24.2203 5.19341 24.0501 5.27854 24.0501 5.40624C24.0501 5.5765 24.3055 5.5765 24.5183 5.61906C24.8588 5.66163 25.3696 5.66163 25.3696 6.17241C25.3696 6.64062 24.9865 6.81088 24.5183 6.81088C24.0501 6.81088 23.7096 6.64062 23.4967 6.4278L23.7096 6.12984C23.8798 6.25754 24.1352 6.4278 24.5183 6.4278C24.7737 6.4278 24.9439 6.34267 24.9439 6.17241C24.9439 6.00215 24.7737 5.95958 24.4757 5.91702C24.0501 5.87445 23.5819 5.83189 23.5819 5.36367C23.5819 4.89546 24.0075 4.76776 24.348 4.76776C24.7311 4.76776 25.0716 4.89546 25.1993 5.02315L25.0291 5.40624Z" fill="currentColor"></path>
                    <path d="M28.3486 4.93824V5.27876H27.6675V6.76853H27.2419V5.27876H26.5609V4.93824H28.3486Z" fill="currentColor"></path>
                    <path d="M29.5394 6.34216C29.7097 6.34216 29.7948 6.46985 29.7948 6.59755C29.7948 6.72524 29.6671 6.85294 29.5394 6.85294C29.4117 6.85294 29.284 6.76781 29.284 6.59755C29.284 6.46985 29.3691 6.34216 29.5394 6.34216Z" fill="currentColor"></path>
                    <path d="M55.6755 6.51202C55.6755 6.12893 56.016 5.91611 56.3991 5.83098C56.4842 5.78841 56.6971 5.74585 56.6971 5.61816C56.6971 5.49046 56.5694 5.44789 56.4417 5.44789C56.2289 5.44789 56.0586 5.57559 55.8883 5.70329L55.6755 5.44789C55.8883 5.27763 56.1012 5.14994 56.4417 5.14994C56.7822 5.14994 57.1227 5.27764 57.1227 5.61816C57.1227 6.00124 56.7396 6.08637 56.4842 6.1715C56.2288 6.25663 56.1012 6.34176 56.1012 6.46945H57.0802V6.76741H55.6755V6.51202Z" fill="currentColor"></path>
                    <path d="M58.9538 5.1076C59.422 5.1076 59.8477 5.49068 59.8477 5.9589C59.8477 6.42711 59.422 6.8102 58.9538 6.8102C58.4856 6.8102 58.0599 6.42711 58.0599 5.9589C58.1025 5.49068 58.4856 5.1076 58.9538 5.1076ZM58.9538 6.51224C59.2092 6.51224 59.4646 6.25685 59.4646 6.00146C59.4646 5.70351 59.2518 5.49068 58.9538 5.49068C58.6558 5.49068 58.443 5.74607 58.443 6.00146C58.4856 6.25685 58.6984 6.51224 58.9538 6.51224Z" fill="currentColor"></path>
                    <path d="M60.7831 5.40511L61.2939 5.19228H61.6344V6.76718H61.2513V5.5328L60.8682 5.70306L60.7831 5.40511Z" fill="currentColor"></path>
                    <path d="M62.9973 6.42711C63.125 6.46968 63.2952 6.51224 63.4229 6.51224C63.7209 6.51224 63.9763 6.34198 64.0189 6.00146C63.8486 6.12916 63.6783 6.21429 63.4229 6.21429C62.9973 6.21429 62.7419 5.9589 62.7419 5.70351C62.7419 5.36299 63.0399 5.1076 63.5081 5.1076C63.9763 5.1076 64.4019 5.40555 64.4019 5.91633C64.4019 6.46968 63.9337 6.8102 63.4655 6.8102C63.1676 6.8102 62.9547 6.72507 62.827 6.6825L62.9973 6.42711ZM63.9763 5.78864C63.8912 5.57581 63.7209 5.44812 63.4655 5.44812C63.2527 5.44812 63.0824 5.57581 63.0824 5.70351C63.0824 5.78864 63.1676 5.91633 63.4229 5.91633C63.6358 5.9589 63.8486 5.87377 63.9763 5.78864Z" fill="currentColor"></path>
                    <path d="M45.2885 2.51133C45.2885 1.10669 44.1392 0 42.7771 0C41.3725 0 40.2658 1.14925 40.2658 2.51133C40.2658 2.5539 40.2658 2.63903 40.2658 2.68159V8.12991H45.2885V2.68159C45.2885 2.59646 45.2885 2.5539 45.2885 2.51133Z" fill="currentColor"></path>
                    <path d="M52.1855 2.51133C52.1855 1.10669 51.0363 0 49.6742 0C48.2695 0 47.1628 1.14925 47.1628 2.51133C47.1628 2.5539 47.1628 2.63903 47.1628 2.68159V8.12991H52.1855V2.68159C52.1855 2.59646 52.1855 2.5539 52.1855 2.51133Z" fill="currentColor"></path>
                    <path d="M38.3939 2.51133C38.3939 1.10669 37.2446 0 35.8825 0C34.5205 0 33.3286 1.10669 33.3286 2.51133C33.3286 2.5539 33.3286 2.63903 33.3286 2.68159V8.12991H38.3513V2.68159C38.3939 2.59646 38.3939 2.5539 38.3939 2.51133Z" fill="currentColor"></path>
                  </svg>
                </a>

                {/* Menú de navegación desktop - solo visible en pantallas grandes */}
                <div className={styles.navMenu}>
                  <p className={styles.navMenuTitle}>Mujer</p>
                  <p className={styles.navMenuTitle}>Hombre</p>
                </div>
              </div>

              {/* Botones de acción: búsqueda, usuario, carrito */}
              <div className={styles.navActions}>
                <button className={styles.actionButton} aria-label="Buscar">
                  <Search size={20} />
                </button>
                <button className={`${styles.actionButton} ${styles.hideOnMobile}`} aria-label="Mi cuenta">
                  <User size={20} />
                </button>
                <button className={styles.actionButton} aria-label="Carrito de compras">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero section con contenido superpuesto sobre imagen de fondo */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Stella McCartney
            </h1>
            <p className={styles.heroSubtitle}>
              Conscious fashion that speaks of elegance and innovation
            </p>
            <p className={styles.herominSubtitle}>Shop Now</p>
          </div>
        </section>
      </div>

      {/* Menú móvil deslizable desde la izquierda */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        {/* Header del menú móvil con tabs para Mujer/Hombre */}
        <div className={styles.mobileMenuHeader}>
          <div className={`${styles.mobileMenuRole} ${selectedRole === 'Mujer' ? styles.mobileMenuRoleActive : ''}`}
            onClick={() => setSelectedRole('Mujer')}>
            <p>Mujer</p>
          </div>
          <div className={`${styles.mobileMenuRole} ${selectedRole === 'Hombre' ? styles.mobileMenuRoleActive : ''}`}
            onClick={() => setSelectedRole('Hombre')}>
            <p>Hombre</p>
          </div>
          <button className={styles.closeButton} onClick={toggleMobileMenu} aria-label="Cerrar menú">
            <X size={24} />
          </button>
        </div>

        {/* Lista de navegación dinámica según categoría seleccionada */}
        <div>
          <ul className={styles.mobileMenuList}>
            {(selectedRole === 'Mujer' ? mujerMenu : hombreMenu).map((item) => (
              <li key={item} className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>
                  {item}
                  <ChevronRight className={styles.chevronRight} />
                </a>
              </li>
            ))}
            {/* Imagen promocional que cambia según la categoría */}
            <img
              src={selectedRole === 'Mujer'
                ? 'https://co.malvaonline.com/cdn/shop/files/Mujer_75504a9f-b071-4688-9ddd-f61f9bf58b15.webp?v=1749661857'
                : 'https://co.malvaonline.com/cdn/shop/files/Hombre_c04a43b9-3530-4445-9462-fa2c86acc78e.webp?v=1750112639'
              }
              alt={`Imagen de ${selectedRole}`}
              className={styles.mobileMenuImage}
            />
          </ul>
        </div>
      </div>

      {/* Overlay semitransparente para cerrar el menú móvil */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={toggleMobileMenu}
      />
    </>
  );
};

export default Header;