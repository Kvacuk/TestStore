import {Routes, Route, Link} from 'react-router-dom'
import { Layout } from './components/layouts/Layout'
import { ProductsListsPage } from './components/ProductsListsPage';
import { ProductDetailPage } from './components/ProductDetailsPage';

function App() {
  return (
    <>
      <Routes>
      <Route  path='/' element={<Layout/>}>
        <Route index path='/' element={<ProductsListsPage/>}/>
        <Route path='/productDetail/:id' element={<ProductDetailPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
