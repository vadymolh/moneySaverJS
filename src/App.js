import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import AddBill from './Components/AddBill'
import M from 'materialize-css'
import { BillContext, BillProvider} from './Context/BillContext';


function App() {
  return (
    <>
        <Navbar/>
        <div className="container">
          <AddBill/>
        </div>
    </>
  );
}

export default App;
