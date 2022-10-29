import Basket from './components/Basket';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Product name="Lemon" />
      <Product name="Orange" />
      <Product name="Apple" />
      <Basket />
    </div>
  );
}

export default App;
