import { http } from './http';
import type { CustomerDto, OrderDto, ProductDto } from './types';

// One function per backend endpoint. Components never call axios directly.

export async function getCustomers(): Promise<CustomerDto[]> {
  const { data } = await http.get<CustomerDto[]>('/customers');
  return data;
}

export async function getCustomer(id: number): Promise<CustomerDto> {
  const { data } = await http.get<CustomerDto>(`/customers/${id}`);
  return data;
}

/** All orders of a customer, newest first. */
export async function getCustomerOrders(customerId: number): Promise<OrderDto[]> {
  const { data } = await http.get<OrderDto[]>(`/customers/${customerId}/orders`);
  return data;
}

export async function getProducts(): Promise<ProductDto[]> {
  const { data } = await http.get<ProductDto[]>('/products');
  return data;
}
