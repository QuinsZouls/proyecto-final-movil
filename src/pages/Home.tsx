import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
const Home: React.FC = () => {
  // TODO Agregar barra de navegación
  return (
    <IonPage className="home-screen">
      <IonContent fullscreen>
        <div>Home screen</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
