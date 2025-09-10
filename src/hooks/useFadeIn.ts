// hooks/useCrossfade.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useCrossfade = (
  ref: React.RefObject<HTMLElement>,
  deps: any[] = [],
  fadeDuration: number = 0.3,
  delayBetween: number = 0.2,
) => {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const tl = gsap.timeline();

    //скрываем
    tl.to(el, {
      autoAlpha: 0,
      y: 20,
      duration: fadeDuration,
      ease: 'power2.in',
    });

    //ждём задержку
    tl.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: fadeDuration,
      ease: 'power2.out',
      delay: delayBetween,
    });
  }, deps);
};
