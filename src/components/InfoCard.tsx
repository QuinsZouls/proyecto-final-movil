import React from 'react';
import { IonCard } from '@ionic/react';

export interface InfoCardProps {
  image?: string;
  children?: React.ReactNode;
  onClick?: (event?: any) => void;
}
const InfoCard: React.FC<InfoCardProps> = ({ children, image, onClick }) => {
  return (
    <IonCard className="info-card" onClick={onClick}>
      <div className="image-wrapper">
        <img src={image} />
      </div>
      <div className="content">{children}</div>
    </IonCard>
  );
};

export default InfoCard;
