import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import CustomerOrdersPage from './pages/CustomerOrdersPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Orders
          </Typography>
          <Button color="inherit" component={Link} to="/customers">
            Customers
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/customers" replace />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/:id/orders" element={<CustomerOrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Container>
    </>
  );
}
