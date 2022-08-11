import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const List = () => {

    const rows = [
        {
            id: 1,
            produto: 'Produto 1',
            img: 'https://via.placeholder.com/150',
            cliente: 'Cliente 1',
            date: '01/01/2019',
            valor: 'R$ 100,00',
            metodo: 'Cartão de Crédito',
            status: 'Aprovado'
        },
        {
            id: 2,
            produto: 'Produto 2',
            img: 'https://via.placeholder.com/150',
            cliente: 'Cliente 2',
            date: '01/01/2019',
            valor: 'R$ 100,00',
            metodo: 'Cartão de Crédito',
            status: 'Aprovado'
        },
        {
            id: 3,
            produto: 'Produto 2',
            img: 'https://via.placeholder.com/150',
            cliente: 'Cliente 2',
            date: '01/01/2019',
            valor: 'R$ 100,00',
            metodo: 'Cartão de Crédito',
            status: 'Aprovado'
        },
        {
            id: 4,
            produto: 'Produto 2',
            img: 'https://via.placeholder.com/150',
            cliente: 'Cliente 2',
            date: '01/01/2019',
            valor: 'R$ 100,00',
            metodo: 'Cartão de Crédito',
            status: 'Aprovado'
        }
    ];

  return (
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>ID</TableCell>
          <TableCell className='tableCell'>Produto</TableCell>
          <TableCell className='tableCell'>Cliente</TableCell>
          <TableCell className='tableCell'>Data</TableCell>
          <TableCell className='tableCell'>Valor</TableCell>
          <TableCell className='tableCell'>Metodo Pag.</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow  key={row.id} >
            <TableCell className='tableCell' > {row.id}  </TableCell>
            <TableCell className='tableCell' >
                <div className="cellWrapper">
                    <img className="image" src={row.img} alt=""/>
                    {row.produto}
                </div>
            </TableCell>
            <TableCell className='tableCell' >{row.cliente}</TableCell>
            <TableCell className='tableCell' >{row.date}</TableCell>
            <TableCell className='tableCell' >{row.valor}</TableCell>
            <TableCell className='tableCell' >{row.metodo}</TableCell>
            <TableCell className='tableCell' ><span className={`status ${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List;