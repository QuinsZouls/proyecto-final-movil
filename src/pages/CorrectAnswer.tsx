import React from 'react';
import Layout from '../components/Layout';
import { IonButton, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { useRouteMatch, useHistory } from 'react-router';
import useApp from '../hooks/app.hook';

const CorrectAnswer: React.FC = () => {
  const {
    params: { courseId, questionId }
  }: any = useRouteMatch();
  const history = useHistory();
  const {
    appData: { courses }
  } = useApp();
  const _nextQuestion = () => {
    let nextQuestion = 0;
    const course = courses[courseId];
    for (const index in course?.questions) {
      if (course?.questions[index]?.id === questionId) {
        nextQuestion = parseInt(index) + 1;
      }
    }
    if (nextQuestion === course?.questions?.length) {
      history.replace(`/results/${courseId}`);
    } else {
      history.replace(
        `/question/${courseId}/${course?.questions[nextQuestion]?.id}`
      );
    }
  };
  return (
    <Layout noHeader className="correct-answer">
      <div className="wrapper">
        <h1>Respuesta correcta</h1>
        <IonIcon icon={checkmarkCircleOutline} />

        <br />
        <IonButton onClick={_nextQuestion}>Siguiente</IonButton>
      </div>
    </Layout>
  );
};
export default CorrectAnswer;
