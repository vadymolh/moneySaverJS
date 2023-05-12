import {useState, useEffect, useContext} from 'react';
import { BillContext, BillProvider} from '../Context/BillContext';

function AddBill(){
    const [billTitle, setBillTitle] = useState('');
    const [billCost, setBillCost] = useState('');

    const { updateBills } = useContext(BillContext);

    const clearForm = ()=>{
      setBillTitle('');
      setBillCost('');
    }
    return(
    <>
    <div className="row">
        <div className="input-field col s6">
          <input placeholder="Назва щомісячного платежу" 
                 id="bill_name" 
                 type="text" 
                 className="validate"
                 value={billTitle}
                 onChange={(e)=> setBillTitle(e.target.value) }></input>
          <label htmlFor="first_name">Назва щомісячного платежу</label>
        </div>
    </div>
    <div className="row">
        <div className="input-field col s6">
          <input placeholder="Сума щомісячного платежу" 
                 id="bill_cost" 
                 type="text" 
                 className="validate"
                 value={billCost}
                 onChange={(e)=> setBillCost(e.target.value) }></input>
          <label htmlFor="first_name">Сума щомісячного платежу</label>
        </div>
    </div>
    <div className='row'>
    <a className="waves-effect waves-light btn"
       onClick={()=>{
            updateBills({
               "title": billTitle,
               "monthlyCost": billCost,
               "enabled": true 
            });
            clearForm();
       }}>Додати</a>
    </div>
    
    </>
    );
};

export default AddBill;