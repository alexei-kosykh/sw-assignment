import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ALL_PRODUCTS } from "./query/product";

function App() {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>Проверка</h1>
      <button>Создать</button>
      <button>Получить</button>
      <div>
        {products.map((product) => (
          <div>
            {product.id}, {product.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
