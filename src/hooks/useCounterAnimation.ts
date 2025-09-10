import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useCounterAnimation = (
  ref: React.RefObject<HTMLElement>,
  value: number,
  duration: number = 1.5,
) => {
  const previous = useRef(value);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { val: previous.current };

    gsap.to(obj, {
      val: value,
      duration,
      ease: 'power1.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.val).toString();
        }
      },
    });

    previous.current = value;
  }, [value, ref, duration]);
};
