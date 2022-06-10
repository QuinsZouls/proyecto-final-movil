import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header, { type HeaderProps } from './Header';
import useApp from '../hooks/app.hook';

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
  const {
    appData: { ready }
  } = useApp();
  return (
    <IonPage className="screen">
      <IonContent>
        {!noHeader && <Header {...headerConfig} />}
        {ready && <div className={`container ${className}`}>{children}</div>}
      </IonContent>
    </IonPage>
  );
};
export default Layout;
