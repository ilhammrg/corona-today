import { ProvinceContainer } from './province-styles';
import { SectionTitle } from '../template-styles/template-styles';
import ProvinceTable from '../province-table/province-table';

const Province = ({ provinces }) => {
  return (
    <ProvinceContainer>
      <SectionTitle>COVID-19 spreading by Province</SectionTitle>
      <ProvinceTable provinces={provinces} />
    </ProvinceContainer>
  );
};



export default Province;
