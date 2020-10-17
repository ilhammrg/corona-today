import numeral from 'numeral';

import { useSelector } from 'react-redux';

import { CardContainer, LogoWrapper, Label, CaseNumber } from './card-big-styles';

const CardBig = ({ label, cases, logoBgColor, logoColor, logo }) => {
  const themes = useSelector((state) => state.theme.themes);
  const formatedCases = numeral(cases).format('0,0');
  return (
    <CardContainer background={themes.bg2} border={themes.border}>
      <LogoWrapper logoBgColor={logoBgColor} logoColor={logoColor}>
        {logo}
      </LogoWrapper>
      <CaseNumber color={themes.font1}>{formatedCases}</CaseNumber>
      <Label>{label}</Label>
    </CardContainer>
  );
};

export default CardBig;
