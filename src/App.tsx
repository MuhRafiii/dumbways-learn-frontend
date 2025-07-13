import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./contexts/AuthProvider";
import { CartProvider } from "./contexts/CartProvider";
import { useAuth } from "./hooks/useAuth";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";
import { Cart } from "./pages/Cart";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/Products";

function Header() {
  const { token, logout } = useAuth();

  return (
    <div className="w-full flex flex-wrap gap-4 p-4 justify-center border-b mb-4 bg-white dark:bg-zinc-900">
      {token && (
        <Button asChild variant="outline">
          <Link to="/">Dashboard</Link>
        </Button>
      )}

      {token && (
        <Button asChild variant="outline">
          <Link to="/products">Products</Link>
        </Button>
      )}

      {token && (
        <Button asChild variant="outline">
          <Link to="/cart">Cart</Link>
        </Button>
      )}

      {token ? (
        <Button onClick={logout} variant="destructive">
          Logout
        </Button>
      ) : (
        <Button asChild variant="outline">
          <Link to="/login">Login</Link>
        </Button>
      )}
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <Products />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
