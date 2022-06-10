import React from 'react';
import bg1 from '../assets/img/background/1.png';
import bg2 from '../assets/img/background/2.png';
import bg3 from '../assets/img/background/3.png';

export interface BackgroundProps {
  mode: 'static' | 'random' | 'mixed';
}
const Background: React.FC = () => {
  return (
    <div className="background">
      <img src={bg1} className="bg-1" />
      <img src={bg2} className="bg-2" />
      <img src={bg3} className="bg-3" />
    </div>
  );
};

export default Background;
