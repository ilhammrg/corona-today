import CountUp from 'react-countup';

const SummaryValue = ({ cases }) => {
  return (
    <>
      {
        cases
          ? <CountUp 
              delay={0}
              duration={1} 
              end={cases} 
              separator=','
              useEasing={true}
            />
          : <span>0</span>
      }
    </>
  );
};

export default SummaryValue;
