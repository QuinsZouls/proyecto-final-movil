import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouteMatch, useHistory } from 'react-router';

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
        position: 'block',
        hideRightSide: true
      }}
      className="course-screen"
    >
      <h1>Aquí va el contenido del curso, con la lista de las lecciones</h1>
      <div>course detail: {courseId}</div>
    </Layout>
  );
};

export default Course;
