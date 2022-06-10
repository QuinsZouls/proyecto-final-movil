import React from 'react';
import Layout from '../components/Layout';

const Question: React.FC = () => {
  return (
    <Layout
      headerConfig={{
        position: 'block',
        hideRightSide: true
      }}
      className="question-screen"
    >
      <div>Pantalla de la pregunta </div>
    </Layout>
  );
};

export default Question;
