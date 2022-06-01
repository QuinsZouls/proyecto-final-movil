import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import useAuth from '../hooks/auth.hook';
const Home: React.FC = () => {
  const { logout } = useAuth();
  // TODO Agregar barra de navegación
  return (
    <IonPage className="home-screen">
      <IonContent fullscreen>
        <IonButton onClick={logout}>Home Page</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
