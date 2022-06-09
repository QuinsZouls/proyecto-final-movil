import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from './Header';
export interface LayoutProps {
  children?: React.ReactNode;
  noHeader?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ children, noHeader }) => {
  return (
    <IonPage className="screen">
      <IonContent>
        {!noHeader && <Header />}
        <div className="container">{children}</div>
      </IonContent>
    </IonPage>
  );
};
export default Layout;
