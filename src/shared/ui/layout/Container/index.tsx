import { type CSSProperties, type HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type TContainerProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  display?: CSSProperties['display'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
};

export const Container = ({
  className,
  children,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  style,
  ...props
}: TContainerProps) => {
  return (
    <div
      className={clsx(styles.container, className)}
      style={{
        display,
        justifyContent,
        alignItems,
        flexDirection,
        flexWrap,
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
