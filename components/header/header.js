import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { switchDark, switchLight } from '../../redux/theme/theme-actions';

import { HeaderContainer, Title, MenuList, CircleButton } from './header-styles';
import { TextNormal, LinkOutside } from '../template-styles/template-styles';
import DarkLogo from '../dark-logo/dark-logo';
import LightLogo from '../light-logo/light-logo';
import HomeLogo from '../home-logo/home-logo';

const Header = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <MenuList>
        <li>
          <Link href='/'>
            <CircleButton 
              title='Home'
            >
              <HomeLogo />
            </CircleButton> 
          </Link>
        </li>
        <li>
          <Link href='/indonesia'>
            <CircleButton 
              title='COVID-19 Indonesia'
            >
              <img src='https://www.countryflags.io/id/flat/64.png' alt='Indonesia' />
            </CircleButton> 
          </Link>
        </li>
        <li>
          <CircleButton
            title='Change theme'
            onClick={() => darkTheme ? dispatch(switchLight()) : dispatch(switchDark())}
          >
            {darkTheme ? <LightLogo /> : <DarkLogo />}
          </CircleButton>
        </li>
      </MenuList>
      
      <Link href='/'>
        <a><Title>Corona Today</Title></a>
      </Link>
      <TextNormal>Monitor latest COVID-19 virus outbreak</TextNormal>
    </HeaderContainer>
  );
};

export default Header;
