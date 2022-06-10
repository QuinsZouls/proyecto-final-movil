import React from 'react';
import Layout from '../components/Layout';
import { useRouteMatch } from 'react-router';
const Course: React.FC = () => {
  const mathc = useRouteMatch();
  // eslint-disable-next-line no-console
  console.log(mathc);
  return (
    <Layout
      headerConfig={{
        position: 'block',
        RightComponent: <div>Hola</div>
      }}
      className="home-screen"
    >
      <div>course detail</div>
    </Layout>
  );
};

export default Course;
