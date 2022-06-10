import React from 'react';
import Layout from '../components/Layout';
import Background from '../components/Background';
import { IonButton } from '@ionic/react';
import { useRouteMatch, useHistory } from 'react-router';
import useApp from '../hooks/app.hook';

const Result: React.FC = () => {
  const {
    params: { courseId }
  }: any = useRouteMatch();
  const history = useHistory();
  const {
    appData: { playHistory }
  } = useApp();

  const _calculateResult = () => {
    let total = 0;
    for (const key of Object.keys(playHistory[courseId])) {
      total += playHistory[courseId][key];
    }
    return (total / Object.keys(playHistory[courseId]).length || 1) * 10;
  };
  return (
    <Layout noHeader className="results">
      <Background />
      <div className="wrapper">
        <h1>Tu resultado es:</h1>
        <h2>{_calculateResult().toPrecision(3)}</h2>
        <br />
        <IonButton onClick={() => history.replace('/')}>Ir a inicio</IonButton>
      </div>
    </Layout>
  );
};
export default Result;
