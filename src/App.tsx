import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import About from "./pages/About";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex gap-4 p-4 justify-center border-b mb-8">
        <Button asChild variant="outline" className="focus:bg-slate-400">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline" className="focus:bg-slate-400">
          <Link to="/about">About</Link>
        </Button>
        <Button asChild variant="outline" className="focus:bg-slate-400">
          <Link to="/post">Post</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
