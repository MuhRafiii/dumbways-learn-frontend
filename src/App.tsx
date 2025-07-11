import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./contexts/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

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
          <Link to="/movies">Movies</Link>
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
            path="/movies"
            element={
              <PrivateRoute>
                <Movies />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
