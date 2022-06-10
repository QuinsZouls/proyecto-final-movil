import React from 'react';
import Layout from '../components/Layout';

const Lesson: React.FC = () => {
  return (
    <Layout
      headerConfig={{
        position: 'block',
        hideRightSide: true
      }}
      className="lesson-screen"
    >
      <h1>En esta pantalla va el contenido de la lección</h1>
    </Layout>
  );
};

export default Lesson;
