import React from 'react';
import Layout from '../components/Layout';

const Media: React.FC = () => {
  return (
    <Layout
      headerConfig={{
        position: 'block',
        hideRightSide: true
      }}
      className="media-screen"
    >
      <div>Media</div>
    </Layout>
  );
};

export default Media;
