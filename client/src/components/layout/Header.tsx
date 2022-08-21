import React from 'react';
import { useSelector } from 'react-redux';
import { isMobileDevice } from 'store/selectors/uiSelectors';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import SearchUsers from '../../modules/users/SearchUsers';
import { isLoggedInSelector } from 'store/selectors/appSelectors';

const Header = () => {
  const isMobile = useSelector(isMobileDevice);
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <div className='container fixed z-[999] top-0 left-1/2 -translate-x-1/2 bg-dark'>
      <div className='py-4 px-6 bg-primary rounded-3xl my-6'>
        <div className='flex justify-between items-center gap-3'>
          <h1 className='text-xl font-bold hidden sm:block'>SocialDive</h1>
          {isLoggedIn && <SearchUsers />}
          <div className='flex items-center gap-2 flex-shrink-0'>
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
