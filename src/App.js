import logo from './logo.svg';
import './App.css'
import TopBar from './component/topbar/TopBar';
import Sidebar from './component/Sidebar/Sidebar';
import Home from './Pages/Homes/Home';

function App() {
  return (
    <div className="App">
     <TopBar/>
   <div className='container'>
    <Sidebar/>
    <Home/>
 
   </div>

    </div>
  );
}

export default App;
