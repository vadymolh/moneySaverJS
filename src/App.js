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
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l8">
              <IntervalOptions/>
              <BillTotal/>
            </div>
            <div className="col s12 m12 l4 ">
              <BillList/>
            </div>
          </div>
          <div className="row"><AddBill/></div>  
          
        </div>
    </>
  );
}

export default App;
