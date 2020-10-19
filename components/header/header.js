import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { switchDark, switchLight } from '../../redux/theme/theme-actions';

import { HeaderContainer, Title, AppName, ToggleThemeButton } from './header-styles';
import { TextNormal, LinkOutside } from '../template-styles/template-styles';
import DarkLogo from '../dark-logo/dark-logo';
import LightLogo from '../light-logo/light-logo';

const Header = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <ToggleThemeButton 
        variant='contained' 
        color='primary'
        onClick={() => darkTheme ? dispatch(switchLight()) : dispatch(switchDark())}
      >
        {darkTheme ? <LightLogo /> : <DarkLogo />}
      </ToggleThemeButton>
      <Link href='/'>
        <a><Title>Corona Today</Title></a>
      </Link>
      <TextNormal>Monitor latest COVID-19 outbreak data served from <LinkOutside href='https://github.com/mathdroid/covid-19-api'target='_blank' rel='noreferrer noopener' >Mathdroid's API</LinkOutside>
      </TextNormal>
    </HeaderContainer>
  );
};

export default Header;
