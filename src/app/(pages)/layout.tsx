import { type ReactNode } from 'react';

import { Header } from '@/widgets/header';
import { AuthSessionSync } from '@/shared/ui/AuthSessionSync';
import { Container } from '@/shared/ui/layout';

type TProps = {
  children: ReactNode;
  modal: ReactNode;
};

export default function LayoutPages({ children, modal }: TProps) {
  return (
    <Container>
      <AuthSessionSync />
      <Header />
      {children}
      {modal}
    </Container>
  );
}
