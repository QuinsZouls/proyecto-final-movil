import React from 'react';
import { createBrowserHistory } from 'history';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from '../pages/Home';

export const history = createBrowserHistory();
// Aquí agregar la pantallas con su respectivo path
const Router: React.FC = () => {
  return (
    <IonReactRouter history={history}>
      <IonRouterOutlet>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Router;
