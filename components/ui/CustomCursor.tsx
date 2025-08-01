import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    setIsVisible(isDesktop);

    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Position initiale au centre de l'écran
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      if (!cursor || !isVisible) return;
      
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      requestAnimationFrame(animateCursor);
    };

    const addHoverEffects = () => {
      // Sélection de tous les éléments interactifs
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input[type="submit"], input[type="button"], [data-cursor-hover], .demo-button, .demo-link, .hover-cursor'
      );

      interactiveElements.forEach((element) => {
        const isButton = element.tagName === 'BUTTON' || 
                         element.getAttribute('role') === 'button' || 
                         element.classList.contains('demo-button');
        
        element.addEventListener('mouseenter', () => {
          if (isButton) {
            cursor?.classList.add('button-hover');
          } else {
            cursor?.classList.add('hover');
          }
        });
        
        element.addEventListener('mouseleave', () => {
          cursor?.classList.remove('hover', 'button-hover');
        });
      });

      // Gestion spéciale pour les inputs et textarea
      const inputElements = document.querySelectorAll('input, textarea, select');
      inputElements.forEach((input) => {
        input.addEventListener('mouseenter', () => {
          cursor?.classList.add('input-hover');
        });
        input.addEventListener('mouseleave', () => {
          cursor?.classList.remove('input-hover');
        });
      });
    };

    const handleMouseDown = () => {
      cursor?.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor?.classList.remove('click');
    };

    const handleResize = () => {
      const isDesktop = window.innerWidth > 1024;
      setIsVisible(isDesktop);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    // MutationObserver pour détecter les changements dans le DOM
    const observer = new MutationObserver(addHoverEffects);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    animateCursor();
    addHoverEffects();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }

        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #CC66DA, #FAEB92);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease, background 0.3s ease;
          transform: translate(-50%, -50%);
          left: 0;
          top: 0;
        }

        .custom-cursor::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          width: 40px;
          height: 40px;
          border: 2px solid rgba(204, 102, 218, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .custom-cursor.hover {
          transform: translate(-50%, -50%) scale(1.5);
          background: linear-gradient(45deg, #FAEB92, #CC66DA);
          box-shadow: 0 0 20px rgba(204, 102, 218, 0.5);
        }

        .custom-cursor.hover::before {
          transform: scale(1.5);
          border-color: rgba(250, 235, 146, 0.6);
        }

        .custom-cursor.click {
          transform: translate(-50%, -50%) scale(0.8);
          background: linear-gradient(45deg, #CC66DA, #FAEB92);
          box-shadow: 0 0 30px rgba(204, 102, 218, 0.8);
        }

        .custom-cursor.button-hover {
          transform: translate(-50%, -50%) scale(2);
          background: linear-gradient(45deg, #FAEB92, #CC66DA);
          box-shadow: 0 0 25px rgba(250, 235, 146, 0.6);
          mix-blend-mode: normal;
        }

        .custom-cursor.button-hover::before {
          transform: scale(1.2);
          border-color: rgba(204, 102, 218, 0.8);
          border-width: 3px;
        }

        .custom-cursor.input-hover {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0.7;
        }

        @media (max-width: 1024px) {
          .custom-cursor {
            display: none !important;
          }
          
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
};