import React, { useState, useEffect } from 'react';
import { IonButton } from '@ionic/react';
import Layout from '../components/Layout';
import ContentView from '../components/ContentView';
// Hooks
import useFirebase, { type Lesson as LessonType } from '../hooks/firebase.hook';
import { useRouteMatch, useHistory } from 'react-router';
import useApp from '../hooks/app.hook';

const Lesson: React.FC = () => {
  const [lesson, setLesson] = useState<LessonType | null>(null);
  const { getLesson } = useFirebase();
  const { completeLesson, appData } = useApp();
  const history = useHistory();
  const {
    params: { courseId, lessonId }
  }: any = useRouteMatch();
  useEffect(() => {
    getLesson(courseId, lessonId).then(data => {
      setLesson(data);
    });
    return () => {
      setLesson(null);
    };
  }, [courseId, lessonId]);
  function _handleComplete() {
    completeLesson(lessonId);
    let lessonIndex: any = 0;
    const subCourse = appData.courses[courseId];
    for (const index in subCourse?.lessons) {
      if (subCourse?.lessons[index]?.id === lessonId) {
        lessonIndex = parseInt(index);
      }
    }
    const nextLesson = subCourse?.lessons[lessonIndex + 1]?.id;
    history.replace(`/lesson/${courseId}/${nextLesson}`);
  }
  function _handleFinishCourse() {
    completeLesson(lessonId);
    history.replace('/course/' + courseId);
  }
  function _isLastLesson() {
    let lessonIndex = 0;
    const subCourse = appData.courses[courseId];
    for (const index in subCourse?.lessons) {
      if (subCourse?.lessons[index]?.id === lessonId) {
        lessonIndex = parseInt(index);
      }
    }
    if (lessonIndex === subCourse?.lessons?.length - 1) {
      return true;
    }
    return false;
  }
  return (
    <Layout
      headerConfig={{
        position: 'block',
        hideRightSide: true
      }}
      className="lesson-screen"
    >
      <ContentView
        type={lesson?.type}
        content={lesson?.content}
        title={lesson?.name}
      />
      {_isLastLesson() ? (
        <div className="btn-container">
          <IonButton onClick={_handleFinishCourse}>Finalizar</IonButton>
        </div>
      ) : (
        <div className="btn-container">
          <IonButton onClick={_handleComplete}>Continuar</IonButton>
        </div>
      )}
    </Layout>
  );
};

export default Lesson;
