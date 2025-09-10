import React, { useState, useEffect, useRef } from 'react';
import './events.scss';
import { EventNavButton, EventSlides } from './components';
import { useCrossfade } from '../../../../hooks';

interface EventItem {
  id: string;
  year: string;
  description: string;
}

interface EventsProps {
  events: EventItem[];
  activeIndex: number;
}

export const Events: React.FC<EventsProps> = ({ events, activeIndex }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const eventsRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useCrossfade(eventsRef, [activeIndex], 0.5);

  useEffect(() => {
    setCurrentSlide(0);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [activeIndex]);

  return (
    <>
      <div className="events" >
        <div className="events__content" ref={eventsRef}>
          <EventNavButton direction="prev" hidden={currentSlide === 0}>
            <span>‹</span>
          </EventNavButton>

          <EventSlides
            events={events}
            onSwiper={(swiper) => {
              setCurrentSlide(swiper.activeIndex);
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          />

          <EventNavButton direction="next">
            <span>›</span>
          </EventNavButton>
        </div>
      </div>
      <div className="events__dots" />
    </>
  );
};
