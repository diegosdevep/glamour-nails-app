import React, { useState } from 'react';
import OnBoardingStack from './Stack/OnBoardingStack';
import BottomTab from './BottomTab/BottomTab';

const AppNavigation = () => {
  const [user, setUser] = useState(false);

  return user ? <BottomTab /> : <OnBoardingStack />;
};

export default AppNavigation;
