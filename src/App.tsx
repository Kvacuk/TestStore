import {Routes, Route, Link} from 'react-router-dom'
import { Layout } from './components/layouts/Layout'
import { ProductsListsPage } from './components/ProductsListsPage';

function App() {
  return (
    <>
      <Routes>
      <Route  path='/' element={<Layout/>}>
        <Route path='/' element={<ProductsListsPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
