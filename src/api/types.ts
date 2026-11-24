// Mirrors the DTOs of sample-backend-api (Dtos/Dtos.cs). Keep field names in camelCase, as serialized by ASP.NET Core.

export interface CustomerDto {
  id: number;
  name: string;
  email: string;
}

export interface ProductDto {
  id: number;
  name: string;
  price: number;
  stockQuantity: number;
}

export type OrderStatus = 'Pending' | 'Paid' | 'Shipped' | 'Cancelled';

export interface OrderItemDto {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderDto {
  id: number;
  customerId: number;
  createdAtUtc: string;
  status: OrderStatus;
  totalAmount: number;
  items: OrderItemDto[];
}
