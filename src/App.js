import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Experts from './Pages/MHome/Experts/Experts';
import Home from './Pages/MHome/Home/Home';
import Inventory from './Pages/MHome/Inventory/Inventory';
import Shipment from './Pages/MHome/Shipment/Shipment';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SignUp from './Pages/SignUp/SignUp';



function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/experts' element={
          /* ----------------------------- 2 no step ----------------------------------------*/
          <RequireAuth>
            <Experts></Experts>
          </RequireAuth>
        }></Route>

        <Route path="/shipment" element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        } />
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
