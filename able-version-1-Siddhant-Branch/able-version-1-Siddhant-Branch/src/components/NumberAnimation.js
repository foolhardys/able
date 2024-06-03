
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const NumberAnimation = ({ targetNumber }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = targetNumber;
      const duration = 2000; // Animation duration in milliseconds
      const incrementTime = 1000 / 60; // 60 frames per second
      const increment = end / (duration / incrementTime);

      const updateNumber = () => {
        start += increment;
        if (start >= end) {
          setDisplayNumber(end);
        } else {
          setDisplayNumber(Math.ceil(start));
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    }
  }, [inView, targetNumber]);

  return (
    <div
      ref={ref}
      className={`text-7xl font-bold transform transition-transform duration-500 ${
        inView ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {displayNumber}
    </div>
  );
};

export default NumberAnimation;