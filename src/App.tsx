import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/layouts/Layout'
import { ProductsListsPage } from './components/ProductsListsPage';
import { ProductDetailPage } from './components/ProductDetails/ProductDetailsPage';

function App() {
  return (
    <>
      <Routes>
      <Route  path='/' element={<Layout/>}>
        <Route index path='/' element={<ProductsListsPage/>}/>
        <Route path='/:id' element={<ProductDetailPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
