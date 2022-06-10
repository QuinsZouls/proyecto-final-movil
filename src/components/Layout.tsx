import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header, { type HeaderProps } from './Header';
export interface LayoutProps {
  children?: React.ReactNode;
  noHeader?: boolean;
  headerConfig?: HeaderProps;
  className?: string;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  noHeader,
  className = '',
  headerConfig
}) => {
  return (
    <IonPage className="screen">
      <IonContent>
        {!noHeader && <Header {...headerConfig} />}
        <div className={`container ${className}`}>{children}</div>
      </IonContent>
    </IonPage>
  );
};
export default Layout;
