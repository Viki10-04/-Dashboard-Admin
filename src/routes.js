import Home from './pages/Home/Home';
import UserList from './pages/Users/UserList';
import NewUser from './pages/NewUser/NewUser';
import Products from './pages/Products/Products';
import Product from './pages/product/product';

let routes = [
    {path: '/', element: <Home />},
    {path: '/Users', element: <UserList />},
    {path: '/NewUser', element: <NewUser />},
    {path: '/Products', element: <Products />},
    {path: '/Product/:ProductID', element: <Product />},
]

export default routes