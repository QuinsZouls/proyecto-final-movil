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
        <Route path="/courses" component={Home} exact={true} />
      </IonRouterOutlet>
      {/* -- Tab bar -- */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/courses" selected={pathname === '/courses'}>
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="tests" href="/courses/tests" selected={pathname === '/courses/tests'}>
          <IonIcon icon={gameController} />
        </IonTabButton>
        <IonTabButton tab="play" href="/courses/media" selected={pathname === '/courses/media'}>
          <IonIcon icon={play} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRouter;
