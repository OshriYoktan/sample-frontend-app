import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getCustomerOrders } from '../api/ordersApi';
import LoadState from '../components/LoadState';
import OrderStatusChip from '../components/OrderStatusChip';
import { useAsync } from '../hooks/useAsync';
import { formatCurrency, formatDate } from '../utils/format';

export default function CustomerOrdersPage() {
  const customerId = Number(useParams().id);
  const state = useAsync(() => getCustomerOrders(customerId), [customerId]);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Orders of customer #{customerId}
      </Typography>
      <LoadState state={state}>
        {(orders) =>
          orders.length === 0 ? (
            <Typography color="text.secondary">No orders yet.</Typography>
          ) : (
            <Paper>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Order</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Items</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell>#{o.id}</TableCell>
                      <TableCell>{formatDate(o.createdAtUtc)}</TableCell>
                      <TableCell>
                        <OrderStatusChip status={o.status} />
                      </TableCell>
                      <TableCell align="right">{o.items.length}</TableCell>
                      <TableCell align="right">{formatCurrency(o.totalAmount)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          )
        }
      </LoadState>
    </>
  );
}
