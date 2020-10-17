import { useSelector, useDispatch } from 'react-redux';
import { switchDark, switchLight } from '../../redux/theme/theme-actions';

import { HeaderContainer, Title, AppName, ToggleThemeButton } from './header-styles';
import { TextNormal, LinkOutside } from '../global-styles/global-styles';
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
      <Title>Welcome to</Title>
      <AppName>Corona Today</AppName>
      <TextNormal>Latest COVID-19 cases</TextNormal>
      <TextNormal>All data are served from <LinkOutside href='https://github.com/mathdroid/covid-19-api'target='_blank' rel='noreferrer noopener' >this api</LinkOutside>
      </TextNormal>
    </HeaderContainer>
  );
};

export default Header;
