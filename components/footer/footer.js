import { FooterContainer } from './footer.styles';
import { TextNormal, LinkOutside } from '../template-styles/template-styles';
import HeartLogo from '../heart-logo/heart-logo';

const Footer = () => {
  return (
    <FooterContainer>
      <TextNormal id='footer-accent'>With <HeartLogo /> from Indonesia</TextNormal>
      <LinkOutside id='footer-about' href='https://ilhamgunawan.now.sh' target='_blank' rel='noreferrer noopener'>Who am I?</LinkOutside>
      <TextNormal id='footer-source'>Data served from<LinkOutside href='https://github.com/mathdroid/covid-19-api'target='_blank' rel='noreferrer noopener' >mathdroid's API</LinkOutside></TextNormal>
    </FooterContainer>
  );
}

export default Footer;
