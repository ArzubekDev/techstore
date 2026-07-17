import { type ReactNode } from 'react';

import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/layout';

type TProps = {
  children: ReactNode;
};

export default function LayoutPages({ children }: TProps) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
