import './App.css';
// import Head from './Components/Head/Head';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddProduct from './Components/AddProduct/AddProduct';
import Update from './Components/AddProduct/Update/Update';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import FetchApi from './FetchApi/FetchApi';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
// import User from './Redux/User';

function App() {
  
  return (
    <div className="App" >
    <BrowserRouter>
    
      <header className="App-header">
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AddProduct' element={<ProtectedRoute Cmp={AddProduct}/>}>
      </Route>
     <Route path='/Update' element={<ProtectedRoute Cmp={Update}/>}></Route>
     <Route path='/Register' element={<Register/>}></Route>
     <Route path='/Login' element={<Login/>}></Route>
     <Route path='/FetchApi' element={<FetchApi/>}></Route>
     
      
      </Routes>
      </header>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
