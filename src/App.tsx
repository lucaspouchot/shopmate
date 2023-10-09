import { ProductList } from './components/ProductList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main className="App">
        <h1>Product List</h1>
        <ProductList />
      </main>
      <Footer/>
    </>
  );
}

export default App;
