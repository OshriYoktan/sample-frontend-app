import { Link as MuiLink, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCustomers } from '../api/ordersApi';
import LoadState from '../components/LoadState';
import { useAsync } from '../hooks/useAsync';

export default function CustomersPage() {
  const state = useAsync(getCustomers, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Customers
      </Typography>
      <LoadState state={state}>
        {(customers) => (
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>
                      <MuiLink component={Link} to={`/customers/${c.id}/orders`}>
                        Orders
                      </MuiLink>
                    </TableCell>
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
