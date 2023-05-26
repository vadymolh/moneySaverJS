import {useState, createContext, useEffect, useReducer} from 'react';

const BillContext = createContext();

const reducer = (state, action) =>{
    state.total = action.total
    if (action.type === "Daily"){
        return state.total *12 /365
    } else if (action.type === "Weekly"){
        return state.total *12 /52
    }
    else if (action.type === "Monthly"){
        return state.total
    }
    else if (action.type === "Yearly"){
        return state.total *12
    }
}


const BillProvider = ({children}) =>{
    const [bills, setBills] = useState([]);
    const [costInterval, setCostInterval] = useState('Monthly');

    const [modeTotal, dispatchTotal] = useReducer(reducer, {total: 0});

    useEffect(()=>{
        setBills(JSON.parse(localStorage.getItem('my-bills')) || [])
        console.log(bills);
    }, [setBills] );


    const updateBills = (bill) =>{    
        const data  = [...bills, bill];
        data.sort( (a,b) =>
            a.title < b.title
        )
        localStorage.setItem('my-bills', 
                         JSON.stringify(data));
        setBills(data);    
    }

    const editBill = (updateBill) => {
        const oldBills = bills.filter((bill)=> bill.title !== updateBill.title) 
        const updatedBills = [...oldBills, updateBill]
        updatedBills.sort( (a,b) =>
            a.title < b.title
        )
        localStorage.setItem('my-bills', 
                            JSON.stringify(updatedBills));
        setBills(updatedBills); 
    }

    return(
        <BillContext.Provider value={{
            bills,
            updateBills,
            editBill,
            costInterval,
            setCostInterval,
            dispatchTotal,
            modeTotal
        }}>
            {children}
        </BillContext.Provider>
    );

}

export {BillContext,
        BillProvider};