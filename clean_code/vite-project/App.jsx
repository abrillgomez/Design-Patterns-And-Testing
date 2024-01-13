import { useState } from 'react';
import axios from 'axios';
import { getErrorMessageMap } from './src/errors/messages';
import { PRODUCT_ENDPOINT } from './src/constants/endpoints';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(PRODUCT_ENDPOINT);
      setIsLoading(false);
      setProducts(data.data.products);
    } catch (error) {
      setErrorMessage(getErrorMessageMap(error.code));
    }
  };

  return (
    <>
      <button onClick={fetchProducts}>Fetch products</button>
      {isLoading ? (
        <>Cargando...</>
      ) : (
        <>
          {products.map((p) => (
            <div key={p.id}>
              <h1>{p.title}</h1>
              <h2>{p.brand}</h2>
              <p>{p.description}</p>
              <p>{p.price}</p>
            </div>
          ))}
        </>
      )}
      {errorMessage ?? ''}
      {/* Si esto existe mostralo, y si no no muestres nada */}
    </>
  );
}

export default App;
