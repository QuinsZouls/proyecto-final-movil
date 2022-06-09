import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import { play, home, gameController } from 'ionicons/icons';
import { Route, useLocation } from 'react-router-dom';
// Páginas de los tabs
import Home from '../pages/Home';

const TabRouter: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} />
      </IonRouterOutlet>
      {/* -- Tab bar -- */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/" selected={pathname === '/'}>
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="tests" href="/tests" selected={pathname === '/tests'}>
          <IonIcon icon={gameController} />
        </IonTabButton>
        <IonTabButton tab="play" href="/media" selected={pathname === '/media'}>
          <IonIcon icon={play} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRouter;
