import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HorizontalList from '../components/HorizontalList';
import InfoCard from '../components/InfoCard';
import monster from '../assets/img/monster/3.png';
// Hooks
import useFirebase from '../hooks/firebase.hook';
import useApp from '../hooks/app.hook';
import { useHistory } from 'react-router';

const Media: React.FC = () => {
  const { getCourses } = useFirebase();
  const {
    appData: { courses },
    loadCourses
  } = useApp();
  const history = useHistory();
  useEffect(() => {
    async function get() {
      const response: any = await getCourses();
      const parsedCourses: any = {};
      for (const course of response) {
        parsedCourses[course?.id] = course;
      }
      loadCourses(parsedCourses);
    }
    if (Object.keys(courses).length === 0) {
      get();
    }
  }, []);

  return (
    <Layout
      headerConfig={{
        hideLeftSide: true,
        position: 'absolute',
        hideRightSide: true
      }}
      className="media-screen"
    >
      <div className="top-content">
        <div className="title">
          <h1>Conoce más...</h1>
        </div>
        <div className="image-wrapper">
          <img src={monster} />
        </div>
      </div>
      <div className="main-content">
        <h1>Cursos</h1>
        <HorizontalList>
          {Object.keys(courses)?.map(key => {
            const course = courses[key];
            return (
              <InfoCard
                image={course.image}
                key={course.id}
                onClick={() => history.push(`/course/${course.id}`)}
              >
                <h2>{course.name}</h2>
                <div>
                  <p>{course.duration}</p>
                </div>
              </InfoCard>
            );
          })}
        </HorizontalList>
      </div>
    </Layout>
  );
};

export default Media;
