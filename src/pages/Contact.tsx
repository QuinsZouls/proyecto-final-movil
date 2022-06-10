import React from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout
      headerConfig={{
        position: 'block',
        hideRightSide: true
      }}
      className="contact-screen"
    >
      <div>Contact</div>
    </Layout>
  );
};

export default Contact;
