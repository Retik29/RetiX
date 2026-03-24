import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const SnapCursor = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const card = e.target.closest('.snap-target');
      if (card) {
        const rect = card.getBoundingClientRect();
        setHoveredBox({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        });
      } else {
        setHoveredBox(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springX = useSpring(0, { stiffness: 500, damping: 35 });
  const springY = useSpring(0, { stiffness: 500, damping: 35 });
  const springW = useSpring(0, { stiffness: 500, damping: 35 });
  const springH = useSpring(0, { stiffness: 500, damping: 35 });

  useEffect(() => {
    if (hoveredBox) {
      springX.set(hoveredBox.x);
      springY.set(hoveredBox.y);
      springW.set(hoveredBox.width);
      springH.set(hoveredBox.height);
    } else {
      springX.set(mousePos.x - 12);
      springY.set(mousePos.y - 12);
      springW.set(24);
      springH.set(24);
    }
  }, [hoveredBox, mousePos, springX, springY, springW, springH]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          width: springW,
          height: springH,
          borderColor: hoveredBox ? 'rgba(0,255,255,0.5)' : 'rgba(255,255,255,0.2)',
          backgroundColor: hoveredBox ? 'rgba(0,255,255,0.009)' : 'transparent',
          borderWidth: hoveredBox ? '1px' : '1px',
          borderStyle: 'solid',
          borderRadius: hoveredBox ? '12px' : '50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full bg-white transition-opacity"
        style={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
          width: 4,
          height: 4,
          opacity: hoveredBox ? 0 : 1
        }}
      />
    </>
  );
};
export default SnapCursor;
