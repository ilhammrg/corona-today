import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ProvinceTable = ({ provinces }) => {
  const provinceRows = provinces.slice(0, 34)
    .map(({ provinsi, kasusPosi, kasusSemb, kasusMeni }) => ({ provinsi, kasusPosi, kasusSemb, kasusMeni }));

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'cornflowerblue !important' }}>Province</TableCell>
            <TableCell align="right" style={{ color: 'orange !important' }}>Total Confirmed</TableCell>
            <TableCell align="right" style={{ color: 'green !important' }}>Recovered</TableCell>
            <TableCell align="right" style={{ color: 'red !important' }}>Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            provinceRows.map(({ provinsi, kasusPosi, kasusSemb, kasusMeni }) => (
              <TableRow key={provinsi}>
                <TableCell component='th' scope='row'>
                  {provinsi}
                </TableCell>
                <TableCell align="right">{kasusPosi}</TableCell>
                <TableCell align="right">{kasusSemb}</TableCell>
                <TableCell align="right">{kasusMeni}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProvinceTable;