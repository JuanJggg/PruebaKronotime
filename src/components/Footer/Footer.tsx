import React, { useState } from 'react';
import { ChevronDown, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import styles from './Footer.module.css';


const Footer: React.FC = () => {
  // Estado para controlar qué secciones están expandidas en móvil
  const [openSections, setOpenSections] = useState<string[]>([
    'social',
    'customer',
    'about',
    'newsletter'
  ]);

  // Estados del formulario de newsletter
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showError, setShowError] = useState(false);

  /**
 * Toggle para expandir/contraer secciones en móvil
 */
  const toggleSection = (sectionName: string) => {
    setOpenSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(s => s !== sectionName)
        : [...prev, sectionName]
    );
  };

    /**
   * Manejo del envío del formulario de newsletter
   * Valida términos y condiciones antes de procesar
   */
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      setShowError(true);
      return;
    }

    setShowError(false);
    // Aquí se enviaría el email al backend
    console.log('Newsletter subscription:', { email, acceptTerms });

    // Reset del formulario
    setEmail('');
    setAcceptTerms(false);
    alert('¡Gracias por suscribirte a nuestro newsletter!');
  };

   /**
   * Componente reutilizable para secciones expandibles
   * Maneja el estado de apertura y la animación del chevron
   */
  const FooterSection: React.FC<{
    title: string;
    children: React.ReactNode;
    sectionKey: string;
  }> = ({ title, children, sectionKey }) => {
    const isOpen = openSections.includes(sectionKey);

    return (
      <div className={styles.footerColumn}>
        <h3 onClick={() => toggleSection(sectionKey)} className={styles.sectionHeader}>
          {title}
          <span className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}>
            <ChevronDown size={20} />
          </span>
        </h3>
        <div className={`${styles.expandableContent} ${isOpen ? styles.open : ''}`}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMain}>
          {/* Sección de redes sociales */}
          <FooterSection title="Síguenos" sectionKey="social">
            <ul className={styles.socialList}>
              <li>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </li>
            </ul>
          </FooterSection>

          {/* Sección de servicio al cliente */}
          <FooterSection title="Servicio al Cliente" sectionKey="customer">
            <ul className={styles.footerList}>
              <li><a href="#" className={styles.footerLink}>Centro de Ayuda</a></li>
              <li><a href="#" className={styles.footerLink}>Contacto</a></li>
              <li><a href="#" className={styles.footerLink}>Cambios y Devoluciones</a></li>
              <li><a href="#" className={styles.footerLink}>Guía de Tallas</a></li>
              <li><a href="#" className={styles.footerLink}>Métodos de Pago</a></li>
              <li><a href="#" className={styles.footerLink}>Envíos</a></li>
            </ul>
          </FooterSection>

          {/* Sección acerca de nosotros */}
          <FooterSection title="Quiénes Somos" sectionKey="about">
            <ul className={styles.footerList}>
              <li><a href="#" className={styles.footerLink}>Nuestra Historia</a></li>
              <li><a href="#" className={styles.footerLink}>Sostenibilidad</a></li>
              <li><a href="#" className={styles.footerLink}>Trabaja con Nosotros</a></li>
              <li><a href="#" className={styles.footerLink}>Inversionistas</a></li>
              <li><a href="#" className={styles.footerLink}>Noticias</a></li>
            </ul>
          </FooterSection>

          {/* Sección de newsletter con formulario */}
          <FooterSection title="Newsletter" sectionKey="newsletter">
            <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.875rem', color: '#adb5bd' }}>
              Suscríbete y recibe las últimas ofertas y novedades <br />
              Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año.
            </p>

            {/* Radio buttons para selección de género */}
            <div className={styles.checkboxContainerTwo}>
              <label>
                <input type="radio" name="genero" value="mujer" />
                Mujer
              </label>
              <label>
                <input type="radio" name="genero" value="hombre" />
                Hombre
              </label>
              <label>
                <input type="radio" name="genero" value="nino" />
                Niño
              </label>
            </div>

            {/* Formulario de suscripción */}
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.newsletterInput}
                required
              />

              {/* Checkbox de términos y condiciones */}
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => {
                    setAcceptTerms(e.target.checked);
                    if (e.target.checked) setShowError(false);
                  }}
                />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  Acepto recibir comunicaciones comerciales de Malva y he leído la
                  <a href="#" style={{ color: 'var(--primary-color)' }}> Política de Privacidad</a>
                </label>
              </div>

              {/* Mensaje de error si no acepta términos */}
              {showError && (
                <div className={styles.errorMessage}>
                  Debes aceptar los términos para continuar
                </div>
              )}

              {/* Botón de suscripción con validación */}
              <button
                type="submit"
                className={styles.newsletterButton}
                disabled={!email || !acceptTerms}
              >
                Suscribirse
              </button>
            </form>
          </FooterSection>
        </div>

        {/* Footer inferior con enlaces legales */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLinks}>
            <a href="#" className={styles.footerBottomLink}>Política de Tratamiento de Datos</a>
            <a href="#" className={styles.footerBottomLink}>Términos y Condiciones</a>
            <a href="#" className={styles.footerBottomLink}>SIC</a>
          </div>
          <p className={styles.copyright}>
            © 2024 Malva Department Store.
          </p>
        </div>
      </div>

      {/* Estilos inline para comportamiento responsive */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
          .${styles.footerColumn} h3 { cursor: default !important; }
        }
        
        @media (max-width: 768px) {
          .mobile-only { display: inline !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;