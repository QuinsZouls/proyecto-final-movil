/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Background from '../components/Background';
import { useRouteMatch, useHistory } from 'react-router';
import { IonButton } from '@ionic/react';
import useApp from '../hooks/app.hook';

const Question: React.FC = () => {
  const [question, setQuestion] = useState<any>();
  const {
    appData: { courses, ready },
    setQuestionResults
  } = useApp();
  const history = useHistory();
  const {
    params: { courseId, questionId }
  }: any = useRouteMatch();

  useEffect(() => {
    if (!courseId) {
      history.push('/');
    }
    if (ready) {
      const course = courses[courseId];
      for (const quest of course?.questions) {
        if (quest.id === questionId) {
          setQuestion(quest);
        }
      }
    }

    return () => {
      setQuestion(null);
    };
  }, [courseId, questionId]);
  function _handleSelectAnswer(answer: number) {
    if (answer === question?.answer) {
      history.push(`/correct/${courseId}/${questionId}`);
      setQuestionResults(courseId, questionId, 1);
    } else {
      history.push(`/incorrect/${courseId}/${questionId}`);
      setQuestionResults(courseId, questionId, 0);
    }
  }
  return (
    <Layout
      headerConfig={{
        position: 'block',
        hideRightSide: true
      }}
      className="question-screen"
    >
      <Background />
      <div className="container">
        <h1>{question?.title}</h1>
        <div className="answers">
          {question?.options?.map((option: string, i: number) => (
            <IonButton
              key={i}
              onClick={() => _handleSelectAnswer(i)}
              expand="block"
            >
              {option}
            </IonButton>
          ))}
        </div>

        <div></div>
      </div>
    </Layout>
  );
};

export default Question;
