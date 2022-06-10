/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useRouteMatch, useHistory } from 'react-router';
import { IonCol, IonIcon, IonRow, IonButton } from '@ionic/react';
import { folder, time } from 'ionicons/icons';
// Hooks
import useFirebase, { type Course as CourseType } from '../hooks/firebase.hook';
import useApp from '../hooks/app.hook';

const GameStart: React.FC = () => {
  const [course, setCourse] = useState<CourseType | null>(null);
  const {
    appData: { courses },
    startGame
  } = useApp();
  const history = useHistory();
  const {
    params: { courseId }
  }: any = useRouteMatch();
  const { getCourse } = useFirebase();

  useEffect(() => {
    if (!courseId) {
      history.push('/');
    } else {
      getCourse(courseId).then((data: CourseType) => {
        setCourse(data);
      });
    }
    return () => {
      setCourse(null);
    };
  }, [courseId]);
  function _handleInitCourse() {
    const course = courses[courseId];
    startGame(courseId);
    history.push(`/question/${courseId}/${course?.questions[0]?.id}`);
  }
  return (
    <Layout
      headerConfig={{
        position: 'absolute',
        hideRightSide: true
      }}
      className="course-screen"
    >
      <div className="top-content-course">
        <img src={course?.image} />
      </div>
      <div className="main-content-course">
        <h1>¡Empecemos con el reto!</h1>
        <IonRow>
          <IonIcon className="icon" icon={folder}></IonIcon>
          <IonCol className="ion-align-self-center">
            Prueba de opción múltiple
          </IonCol>
          <IonIcon className="icon" icon={time}></IonIcon>
          <IonCol className="ion-align-self-center">{course?.duration}</IonCol>
        </IonRow>
        <p>Aquí pondrás aprueba tu conocimiento</p>
      </div>
      <div className="course-lavel" style={{ textAlign: 'center' }}>
        <IonButton onClick={_handleInitCourse}>Iniciar prueba</IonButton>
      </div>
    </Layout>
  );
};

export default GameStart;
