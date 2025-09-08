import React from 'react';

interface EventCardProps {
  year: string;
  description: string;
}

export const EventCard: React.FC<EventCardProps> = ({ year, description }) => (
  <div className="events__event">
    <div className="events__event__year">{year}</div>
    <div className="events__event__description">{description}</div>
  </div>
);
