import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import AddBill from './Components/AddBill'
import BillList from './Components/BillList';
import M from 'materialize-css'
import { BillContext, BillProvider} from './Context/BillContext';
import BillTotal from './Components/BillTotal';
import IntervalOptions from './Components/IntervalOptions';


function App() {
  return (
    <>
        <Navbar/>
        <div className="container">
          <IntervalOptions/>
          <AddBill/>
          <BillList/>
          <BillTotal/>
        </div>
    </>
  );
}

export default App;
