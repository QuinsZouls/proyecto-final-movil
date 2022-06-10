import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouteMatch, useHistory } from 'react-router';
import { IonCol, IonIcon, IonRow } from '@ionic/react';
import { folder, time } from 'ionicons/icons';

const Course: React.FC = () => {
  const history = useHistory();
  const {
    params: { courseId }
  }: any = useRouteMatch();

  useEffect(() => {
    if (!courseId) {
      history.push('/');
    }
  }, []);
  return (
    <Layout
      headerConfig={{
        position: 'absolute',
        hideRightSide: true
      }}
      className="course-screen"
    >
      <div className="top-content-course"></div>
      <div className="main-content-course">
        <h1>¡Empecemos!</h1>
        <IonRow>
          <IonIcon className="icon" icon={folder}></IonIcon>
          <IonCol className="ion-align-self-center"> 4 Niveles</IonCol>
          <IonIcon className="icon" icon={time}></IonIcon>
          <IonCol className="ion-align-self-center">2-5 min | Nivel</IonCol>
        </IonRow>
        <p>Aquí aprenderas un poco sobre la historia del dinero</p>

        <div className="course-lavel">
          <h3>Aprendamos</h3>
          <div className="circle">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        <div>course detail: {courseId}</div>
      </div>
    </Layout>
  );
};

export default Course;
