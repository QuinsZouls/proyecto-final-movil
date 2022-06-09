import React from 'react';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import TabRouter from './TabRouter';

export const history = createBrowserHistory();
// Aquí agregar la pantallas con su respectivo path
const Router: React.FC = () => {
  return (
    <IonReactRouter history={history}>
      <IonRouterOutlet id="main">
        <Route path="/">
          <TabRouter />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Router;
