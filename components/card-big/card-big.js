import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import { useSelector } from 'react-redux';

import { CardContainer, LogoWrapper, Label, CaseNumber } from './card-big-styles';

const CardBig = ({ label, cases, logoBgColor, logoColor, logo }) => {
  const bgColor = useSelector((state) => state.theme.themes.bg1);
  const caseInt = parseInt(cases);
  return (
    <Tilt 
      className='card-tilt'
      glareEnable={true} 
      glareMaxOpacity={0.6} 
      glareColor={bgColor} 
      glarePosition='all'
      tiltMaxAngleX='10'
      tiltMaxAngleY='10'
      tiltReverse={true}
    >
      <CardContainer>
        <LogoWrapper logoBgColor={logoBgColor} logoColor={logoColor}>
          {logo}
        </LogoWrapper>
        <CaseNumber color={logoColor}> 
          {
            caseInt
              ? <CountUp 
                  delay={0}
                  duration={1} 
                  end={caseInt} 
                  separator=','
                  useEasing={true}
                  preserveValue={true}
                />
              : '0'
          }
        </CaseNumber>
        <Label>{label}</Label>
      </CardContainer>
    </Tilt>
  );
};

export default CardBig;
