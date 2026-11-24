import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as api from '../api/ordersApi';
import type { OrderDto } from '../api/types';
import CustomerOrdersPage from './CustomerOrdersPage';

vi.mock('../api/ordersApi');

const orders: OrderDto[] = [
  { id: 2, customerId: 1, createdAtUtc: '2026-01-21T00:00:00', status: 'Paid', totalAmount: 310, items: [{ productId: 3, productName: '27-inch Monitor', quantity: 1, unitPrice: 310 }] },
  { id: 1, customerId: 1, createdAtUtc: '2026-01-04T00:00:00', status: 'Shipped', totalAmount: 165.5, items: [] },
];

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/customers/:id/orders" element={<CustomerOrdersPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('CustomerOrdersPage', () => {
  beforeEach(() => vi.resetAllMocks());

  it('loads the orders of the customer in the URL and shows them', async () => {
    vi.mocked(api.getCustomerOrders).mockResolvedValue(orders);

    renderAt('/customers/1/orders');

    expect(await screen.findByText('#2')).toBeInTheDocument();
    expect(screen.getByText('$310.00')).toBeInTheDocument();
    expect(screen.getByText('Shipped')).toBeInTheDocument();
    expect(api.getCustomerOrders).toHaveBeenCalledWith(1);
  });

  it('shows an empty state', async () => {
    vi.mocked(api.getCustomerOrders).mockResolvedValue([]);

    renderAt('/customers/2/orders');

    expect(await screen.findByText('No orders yet.')).toBeInTheDocument();
  });

  it('shows the error when loading fails', async () => {
    vi.mocked(api.getCustomerOrders).mockRejectedValue(new Error('Network Error'));

    renderAt('/customers/1/orders');

    expect(await screen.findByText('Network Error')).toBeInTheDocument();
  });
});
