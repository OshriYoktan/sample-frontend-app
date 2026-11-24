import { Chip } from '@mui/material';
import type { OrderStatus } from '../api/types';

const colors: Record<OrderStatus, 'default' | 'info' | 'success' | 'error'> = {
  Pending: 'default',
  Paid: 'info',
  Shipped: 'success',
  Cancelled: 'error',
};

export default function OrderStatusChip({ status }: { status: OrderStatus }) {
  return <Chip size="small" label={status} color={colors[status]} />;
}
