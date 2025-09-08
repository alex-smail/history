import { useEffect } from 'react';
import { gsap } from 'gsap';

export function useTitleAnimation(
  titleRef: React.RefObject<HTMLHeadingElement>,
  activeTitle: string,
) {
  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 0.6,
        ease: 'power2.out',
      },
    );
  }, [activeTitle]);
}
