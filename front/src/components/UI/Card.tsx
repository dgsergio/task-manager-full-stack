import React from 'react';
import styles from './Card.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: Props) {
  return (
    <div className={`${styles.card} ${className && className}`}>{children}</div>
  );
}

export default Card;
