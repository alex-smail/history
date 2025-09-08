import React, { ReactNode } from 'react';
import { Button } from '../../../../../button/button';
// import { Button } from "../../../button/button";

interface EventNavButtonProps {
  direction: 'prev' | 'next';
  hidden?: boolean;
  children: ReactNode;
}

export const EventNavButton: React.FC<EventNavButtonProps> = ({
  direction,
  hidden,
  children,
}) => (
  <Button className={`${hidden ? 'hidden' : ''} btn__event ${direction}`}>
    {children}
  </Button>
);
