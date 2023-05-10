import {useState, useEffect} from 'react';

function AddBill(){
    const [billTitle, setBillTitle] = useState('');
    const [billCost, setBillCost] = useState('');
    const [bills, setBills] = useState([]);

    useEffect(()=>{
        setBills(JSON.parse(localStorage.getItem('my-bills')) || [])
        console.log(bills);
    }, [setBills] );

    const updateBills = (bill) =>{    
            const data  = [...bills, bill];
            localStorage.setItem('my-bills', 
                             JSON.stringify(data));
            setBills(data);    
        console.log(bills);
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
       }}>Додати</a>
    </div>
    
    </>
    );
};

export default AddBill;