import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import HorizontalList from '../components/HorizontalList';
import InfoCard from '../components/InfoCard';
import monster from '../assets/img/monster/2.png';
// Hooks
import useFirebase from '../hooks/firebase.hook';
import { useHistory } from 'react-router';

const GameTests: React.FC = () => {
  const { courses, fetchCourses } = useFirebase();
  const history = useHistory();
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <Layout
      headerConfig={{
        hideLeftSide: true,
        position: 'absolute',
        hideRightSide: true
      }}
      className="tests-screen"
    >
      <div className="top-content">
        <div className="title">
          <h1>Ponte</h1>
          <h5>a prueba</h5>
        </div>
        <div className="image-wrapper">
          <img src={monster} />
        </div>
      </div>
      <div className="main-content">
        <h1>Tests</h1>
        <HorizontalList>
          {courses?.map(course => (
            <InfoCard
              image={course.image}
              key={course.id}
              onClick={() => history.push(`/game/${course.id}`)}
            >
              <h2>{course.name}</h2>
              <div>
                <p>{course.duration}</p>
              </div>
            </InfoCard>
          ))}
        </HorizontalList>
      </div>
    </Layout>
  );
};

export default GameTests;
