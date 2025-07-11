import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./contexts/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";
import { Dashboard } from "./pages/Dashboard";
import { Favourite } from "./pages/Favourite";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

function Header() {
  const { token, logout } = useAuth();

  return (
    <div className="w-full flex flex-wrap gap-4 p-4 justify-center border-b mb-4 bg-white dark:bg-zinc-900">
      <Button asChild variant="outline">
        <Link to="/">Dashboard</Link>
      </Button>
      <Button asChild variant="outline">
        <Link to="/movies">Movies</Link>
      </Button>

      {token && (
        <Button asChild variant="outline">
          <Link to="/favourite">Favourite</Link>
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/favourite"
            element={
              <PrivateRoute>
                <Favourite />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
