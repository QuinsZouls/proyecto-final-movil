import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Redirect } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import TabRouter from './TabRouter';
import Course from '../pages/Course';
import Question from '../pages/Question';
import Lesson from '../pages/Lesson';
import GameStart from '../pages/GameStart';
export const history = createBrowserHistory();
// Aquí agregar la pantallas con su respectivo path
const Router: React.FC = () => {
  return (
    <IonReactRouter history={history}>
      <IonRouterOutlet id="main">
        <Route path="/courses">
          <TabRouter />
        </Route>
        <Route path="/course/:courseId">
          <Course />
        </Route>
        <Route path="/lesson/:courseId/:lessonId">
          <Lesson />
        </Route>
        <Route path="/game/:courseId">
          <GameStart />
        </Route>
        <Route path="/question/:courseId/:questionId">
          <Question />
        </Route>
        <Route exact path="/">
          <Redirect to="/courses" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Router;
