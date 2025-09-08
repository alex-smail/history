import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { EventCard } from "../event-card/event-card";
// import { EventCard } from "./EventCard";

interface EventItem {
  id: string;
  year: string;
  description: string;
}

interface EventSlidesProps {
  events: EventItem[];
  onSwiper: (swiper: any) => void;
  onSlideChange: (swiper: any) => void;
}

export const EventSlides: React.FC<EventSlidesProps> = ({
  events,
  onSwiper,
  onSlideChange,
}) => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation={{ prevEl: ".prev", nextEl: ".next" }}
    pagination={{ el: ".events__dots", clickable: true }}
    onSlideChange={onSlideChange}
    onSwiper={onSwiper}
    slidesPerView={2}
    spaceBetween={24}
    breakpoints={{
      200: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    }}
  >
    {events.map(({ id, year, description }) => (
      <SwiperSlide key={id}>
        <EventCard year={year} description={description} />
      </SwiperSlide>
    ))}
  </Swiper>
);