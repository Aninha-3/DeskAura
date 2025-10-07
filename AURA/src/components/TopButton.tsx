// TopButton.tsx
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import styles from './TopButton.module.css';

function TopButton() {
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

 // Efeito para ajustar o chatbot quando o botão aparece
useEffect(() => {
  const chatbotContainer = document.querySelector('.container');
  if (chatbotContainer && chatbotContainer instanceof HTMLElement) {
    if (isVisible) {
      chatbotContainer.style.bottom = '90px';
      chatbotContainer.style.transition = 'bottom 0.3s ease-in-out';
    } else {
      chatbotContainer.style.bottom = '24px';
    }
  }
}, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTopBtn}
          title="Voltar ao topo"
          aria-label="Voltar ao topo da página"
        >
          <FiArrowUp size={20} color="#fff" />
        </button>
      )}
    </>
  );
}

export default TopButton;