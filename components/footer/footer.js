import { FooterContainer } from './footer.styles';
import { TextNormal, LinkOutside } from '../template-styles/template-styles';
import HeartLogo from '../heart-logo/heart-logo';

const Footer = () => {
  return (
    <FooterContainer>
      <TextNormal>With <HeartLogo /> from Indonesia</TextNormal>
      <LinkOutside href='https://ilhamgunawan.now.sh' target='_blank' rel='noreferrer noopener'>Who am I?</LinkOutside>
    </FooterContainer>
  );
}

export default Footer;
