// import { useState } from 'react'
import "./App.css";
import laptop from "./assets/laptop.png";
import printer from "./assets/printer.png";
import router from "./assets/router.png";
import Card from "./components/ProductCard";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ul className="list">
          <Card name="Product 1" price={100000} image={laptop} />
          <Card name="Product 2" price={200000} image={router} />
          <Card name="Product 3" price={300000} image={printer} />
        </ul>
      </div>
    </>
  );
}

export default App;
