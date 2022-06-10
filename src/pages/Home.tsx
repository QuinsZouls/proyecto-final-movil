import React, { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { callOutline } from 'ionicons/icons';

import Layout from '../components/Layout';
import HorizontalList from '../components/HorizontalList';
import InfoCard from '../components/InfoCard';
import monster from '../assets/img/monster/1.png';
// Hooks
import useFirebase from '../hooks/firebase.hook';
import useApp from '../hooks/app.hook';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
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
        RightComponent: (
          <div
            className="right-icon"
            onClick={() => history.push('/courses/contact')}
          >
            <IonIcon icon={callOutline} />
          </div>
        )
      }}
      className="home-screen"
    >
      <div className="top-content">
        <div className="title">
          <h1>¡Hola!</h1>
          <h5>Empecemos a aprender</h5>
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

export default Home;
