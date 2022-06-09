import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

import { history } from './Router';

export interface HeaderProps {
  hideLeftSide?: boolean;
  hideRightSide?: boolean;
  RightComponent?: React.ReactNode;
  LeftComponent?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ RightComponent, LeftComponent, hideRightSide }) => {
  return (
    <div className="header">
      <div className="navigation">
        <div className="left-side">
          {typeof LeftComponent !== 'undefined' ? (
            LeftComponent
          ) : (
            <div onClick={() => history.goBack()}>
              <IonIcon icon={arrowBackOutline} />
            </div>
          )}
        </div>
        <div className="right-side">{RightComponent}</div>
      </div>
    </div>
  );
};

export default Header;
