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
      const buttons = document.querySelectorAll('button, .demo-button');
      const links = document.querySelectorAll('a, .demo-link');
      const interactiveElements = document.querySelectorAll('.hover-cursor');

      buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          cursor?.classList.add('button-hover');
        });
        button.addEventListener('mouseleave', () => {
          cursor?.classList.remove('button-hover');
        });
      });

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          cursor?.classList.add('hover');
        });
        link.addEventListener('mouseleave', () => {
          cursor?.classList.remove('hover');
        });
      });

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor?.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
          cursor?.classList.remove('hover');
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

    const timer = setTimeout(addHoverEffects, 100);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
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
          transition: all 0.1s ease;
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