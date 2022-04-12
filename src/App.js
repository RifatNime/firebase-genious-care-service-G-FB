import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Experts from './Pages/MHome/Experts/Experts';
import Home from './Pages/MHome/Home/Home';
import Inventory from './Pages/MHome/Inventory/Inventory';
import Shipment from './Pages/MHome/Shipment/Shipment';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';



function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
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
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
