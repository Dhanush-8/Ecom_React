import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/Private';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element="HomePage"></Route>
            <Route path='/add' element='Add Products'></Route>
            <Route path='/update' element="Update Product"> </Route>
            <Route path='/logout' element="Logoutingg"> Logout</Route>
            <Route path='/profile' element="Profile"> </Route>
          </Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
