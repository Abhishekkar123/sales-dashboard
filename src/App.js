import logo from './logo.svg';
import './App.css'
import TopBar from './component/topbar/TopBar';
import Sidebar from './component/Sidebar/Sidebar';
import Home from './Pages/Homes/Home';
import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UserList from './Pages/userList/UserList';
import User from './Pages/user/User';
import NewUser from './Pages/newpages/NewUser';
import Product from './Pages/products/Product';
function App() {
  return (
    
    
      <Router>
     <TopBar/>
   <div className='container'>
    <Sidebar/>
    <Routes>
    
   <Route  path='/sales-dashboard/' element={<Home/>} exact/>
   
   <Route path='/sales-dashboard/users' element={<UserList/>} />
   
   <Route path='/user/:userId' element={<User/>} />
   <Route path='/newuser' element={<NewUser/>} />
   <Route path='/products' element={<Product/>} />
    </Routes>
 
   </div>
   </Router>
 
    
  );
}

export default App;
