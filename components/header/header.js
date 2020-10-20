import Link from 'next/link';
import SvgIcon from '@material-ui/core/SvgIcon';

import { useSelector, useDispatch } from 'react-redux';
import { switchDark, switchLight } from '../../redux/theme/theme-actions';

import { HeaderContainer, Title, MenuList, CustomButton } from './header-styles';
import { TextNormal, LinkOutside } from '../template-styles/template-styles';
import DarkLogo from '../dark-logo/dark-logo';
import LightLogo from '../light-logo/light-logo';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

const Header = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <MenuList>
        <li>
          <Link href='/'>
            <CustomButton
              variant='contained' 
              color='primary'
              title='Home'
            >
              <HomeIcon />
            </CustomButton> 
          </Link>
        </li>
        <li>
          <Link href='/indonesia'>
            <CustomButton
              variant='contained' 
              color='primary'
              title='COVID-19 Indonesia'
            >
              <img src='https://www.countryflags.io/id/flat/64.png' alt='Indonesia' />
            </CustomButton> 
          </Link>
        </li>
        <li>
          <CustomButton 
            variant='contained' 
            color='primary'
            title='Change theme'
            onClick={() => darkTheme ? dispatch(switchLight()) : dispatch(switchDark())}
          >
            {darkTheme ? <LightLogo /> : <DarkLogo />}
          </CustomButton>
        </li>
      </MenuList>
      
      <Link href='/'>
        <a><Title>Corona Today</Title></a>
      </Link>
      <TextNormal>Monitor latest COVID-19 virus outbreak. Data served from <LinkOutside href='https://github.com/mathdroid/covid-19-api'target='_blank' rel='noreferrer noopener' >Mathdroid's API</LinkOutside>
      </TextNormal>
    </HeaderContainer>
  );
};

export default Header;
