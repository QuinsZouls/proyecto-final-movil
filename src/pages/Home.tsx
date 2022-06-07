import React from 'react';
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonCol,
  IonGrid,
  IonRow
} from '@ionic/react';
import { heart, time } from 'ionicons/icons';

const Home: React.FC = () => {
  // TODO Agregar barra de navegación
  return (
    <IonPage className="home-screen">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* -- Card courses -- */}
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard href="#">
                <div>
                  <img
                    src={
                      'https://images.unsplash.com/photo-1522111608460-19e7331e00fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                    }
                  ></img>
                </div>

                <IonCardHeader>
                  <IonCardSubtitle>Conceptos básicos</IonCardSubtitle>
                  <IonCardTitle>¡Empecemos!</IonCardTitle>
                </IonCardHeader>

                <IonItem>
                  <IonIcon icon={time} slot="start" />
                  <IonLabel> 2-5 min | Nivel</IonLabel>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                  </IonButton>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonCard href="#">
                <div>
                  <img
                    src={
                      'https://images.unsplash.com/photo-1622219999459-ab5b14e5f45a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
                    }
                  ></img>
                </div>

                <IonCardHeader>
                  <IonCardSubtitle>¿Qué es y para qué ahorrar?</IonCardSubtitle>
                  <IonCardTitle>Ahorra</IonCardTitle>
                </IonCardHeader>

                <IonItem>
                  <IonIcon icon={time} slot="start" />
                  <IonLabel> 2-5 min | Nivel</IonLabel>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                  </IonButton>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
