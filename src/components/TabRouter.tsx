import React from 'react';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
  IonContent,
  IonRouterOutlet
} from '@ionic/react';
import { play, home, gameController } from 'ionicons/icons';
import { Route, useRouteMatch } from 'react-router-dom';

export const TabRouter: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route path={`${url}`}>
            <IonContent>
              <div>Hola Home</div>
            </IonContent>
          </Route>
        </IonRouterOutlet>
        {/* -- Tab bar -- */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" selected>
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="contact">
            <IonIcon icon={gameController} />
          </IonTabButton>
          <IonTabButton tab="play">
            <IonIcon icon={play} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};
