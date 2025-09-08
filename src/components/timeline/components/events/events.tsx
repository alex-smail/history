import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './events.scss';
import { Button } from '../../../button/button';

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
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    setCurrentSlide(0);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [activeIndex]);

  return (
    <div className="events">
      <div className="events__content">
        <Button
          className={
            currentSlide === 0 ? 'hidden btn__event prev' : 'btn__event prev'
          }
        >
          <span>‹</span>
        </Button>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: '.prev', nextEl: '.next' }}
          pagination={{ el: '.events__dots', clickable: true }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          onSwiper={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
            swiperRef.current = swiper;
          }}
          slidesPerView={2}
          spaceBetween={24}
          breakpoints={{ 200: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
        >
          {events.map(({ id, year, description }) => (
            <SwiperSlide key={id}>
              <div className="events__event">
                <div className="events__event__year">{year}</div>
                <div className="events__event__description">{description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button className="btn__event next">
          <span>›</span>
        </Button>
      </div>
      <div className="events__dots" />
    </div>
  );
};
