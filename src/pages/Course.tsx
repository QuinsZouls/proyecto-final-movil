/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useRouteMatch, useHistory } from 'react-router';
import { IonCol, IonIcon, IonRow } from '@ionic/react';
import { folder, time } from 'ionicons/icons';
// Hooks
import useFirebase, { type Course as CourseType } from '../hooks/firebase.hook';
const Course: React.FC = () => {
  const [course, setCourse] = useState<CourseType | null>(null);
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
        <h1>¡Empecemos!</h1>
        <IonRow>
          <IonIcon className="icon" icon={folder}></IonIcon>
          <IonCol className="ion-align-self-center"> {course?.level}</IonCol>
          <IonIcon className="icon" icon={time}></IonIcon>
          <IonCol className="ion-align-self-center">{course?.duration}</IonCol>
        </IonRow>
        <p>{course?.description || 'Sin descripción'}</p>

        <div className="course-lavel">
          <h3>Aprendamos</h3>
          {course?.lessons?.map((lesson, index) => (
            <div
              className="circle"
              key={index}
              onClick={() => history.push(`/lesson/${courseId}/${lesson?.id}`)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Course;
