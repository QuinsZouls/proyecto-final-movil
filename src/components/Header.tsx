import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

import { history } from './Router';

export interface HeaderProps {
  hideLeftSide?: boolean;
  hideRightSide?: boolean;
  RightComponent?: React.ReactNode;
  LeftComponent?: React.ReactNode;
  position?: 'block' | 'absolute' | 'fixed';
  className?: string;
}
const Header: React.FC<HeaderProps> = ({
  RightComponent,
  LeftComponent,
  hideRightSide,
  hideLeftSide,
  position = 'block',
  className = ''
}) => {
  return (
    <div className={`header ${position} ${className}`}>
      <div className="navigation">
        {!hideLeftSide ? (
          <div className="left-side">
            {typeof LeftComponent !== 'undefined' ? (
              LeftComponent
            ) : (
              <div onClick={() => history.goBack()}>
                <IonIcon icon={arrowBackOutline} />
              </div>
            )}
          </div>
        ) : (
          <div className="left-side"></div>
        )}
        {!hideRightSide && <div className="right-side">{RightComponent}</div>}
      </div>
    </div>
  );
};

export default Header;
