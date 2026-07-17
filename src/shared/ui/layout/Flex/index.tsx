import { type CSSProperties, type HTMLAttributes } from 'react';
import clsx from 'clsx';

type TFlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  display?: 'flex' | 'inline-flex';
};

export const Flex = ({
  children,
  className,
  style,
  direction,
  justify,
  align,
  wrap,
  gap,
  display = 'flex', // По умолчанию всегда flex
  ...props
}: TFlexProps) => {
  return (
    <div
      className={clsx(className)}
      style={{
        display,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
        ...style, // Внешний style может переопределить всё, если нужно
      }}
      {...props}
    >
      {children}
    </div>
  );
};
