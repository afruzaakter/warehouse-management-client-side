

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';

import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import InventoryItems from './Components/InventoryItems/InventoryItems';
import ManageItems from './Components/ManageInventory/ManageItems';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventoryItems' element={
          <RequireAuth>
            <InventoryItems></InventoryItems>
          </RequireAuth>
        }
        ></Route>


         {/* <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryItems></InventoryItems>
          </RequireAuth>
        }
        ></Route>  */}


        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }
        ></Route>
        
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
