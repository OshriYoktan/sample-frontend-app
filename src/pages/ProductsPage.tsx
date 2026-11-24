import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { getProducts } from '../api/ordersApi';
import LoadState from '../components/LoadState';
import { useAsync } from '../hooks/useAsync';
import { formatCurrency } from '../utils/format';

export default function ProductsPage() {
  const state = useAsync(getProducts, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>
      <LoadState state={state}>
        {(products) => (
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">In stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell align="right">{formatCurrency(p.price)}</TableCell>
                    <TableCell align="right">{p.stockQuantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </LoadState>
    </>
  );
}
