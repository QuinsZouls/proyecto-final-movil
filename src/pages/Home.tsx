import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HorizontalList from '../components/HorizontalList';
import InfoCard from '../components/InfoCard';
import monster from '../assets/img/monster/1.png';
// Hooks
import useFirebase from '../hooks/firebase.hook';
import { useHistory } from 'react-router';
const Home: React.FC = () => {
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
        RightComponent: <div>Hola</div>
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
          {courses?.map(course => (
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
          ))}
        </HorizontalList>
      </div>
    </Layout>
  );
};

export default Home;
