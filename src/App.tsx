import { Header } from './components/Header';
import Products from './components/Products';
import { useFilters } from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json';
function App() {
  const { filterProducts } = useFilters();
  return (
    <>
      <Header />
      <Products products={filterProducts(initialProducts)} />
    </>
  );
}

export default App;
