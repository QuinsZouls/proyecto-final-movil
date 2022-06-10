import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouteMatch, useHistory } from 'react-router';

const GameStart: React.FC = () => {
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
      <h1>Aquí va la pantalla para iniciar el juego</h1>
      <div>Game detail: course ID {courseId}</div>
    </Layout>
  );
};

export default GameStart;
