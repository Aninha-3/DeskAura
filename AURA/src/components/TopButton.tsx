import { useState, useEffect } from 'react';
import styles from './TopButton.module.css';
import { FiArrowUp } from 'react-icons/fi'; 

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTopBtn}
          title="Voltar ao topo"
        >
          {/* Use o componente do ícone aqui */}
          <FiArrowUp size={24} color="#fff" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
