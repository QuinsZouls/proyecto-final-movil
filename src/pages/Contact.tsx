import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout
      headerConfig={{
        position: 'absolute',
        hideRightSide: true
      }}
      className="home-screen"
    >
      <div className="top-content">
        <div className="title">
          <h1>Encuentranos</h1>
          <h5>Para ver más contenido</h5>
        </div>
      </div>
      <div className="social-links">
        <div className="link-wrapper">
          <IonIcon icon={logoInstagram} className="instagram" />
          <span>Finance_kids</span>
        </div>
        <div className="link-wrapper">
          <IonIcon icon={logoTwitter} className="twitter" />
          <span>Finance_kids</span>
        </div>
        <div className="link-wrapper">
          <IonIcon icon={logoFacebook} className="facebook" />
          <span>Finance_kids</span>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
