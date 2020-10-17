import { FooterContainer, FlagImage } from './footer.styles';
import { TextNormal, LinkOutside } from '../global-styles/global-styles';
import HeartLogo from '../heart-logo/heart-logo';

const Footer = () => {
  return (
    <FooterContainer>
      <TextNormal>With <HeartLogo /> from <FlagImage src='https://www.countryflags.io/id/shiny/24.png' alt='Indonesia'/> Indonesia</TextNormal>
      <LinkOutside href='https://github.com/ilhammrg' target='_blank' rel='noreferrer noopener'>Who am I?</LinkOutside>
    </FooterContainer>
  );
}

export default Footer;
