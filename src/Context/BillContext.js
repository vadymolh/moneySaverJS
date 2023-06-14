import {useState, createContext, useEffect, useReducer} from 'react';

const BillContext = createContext();

const reducer = (state, action) =>{
    //state.total = action.total
    console.log("REDUCER action", action);
    if (action.type === "Daily"){
        return {total: (action.total *12 /365).toFixed(2)}
    } else if (action.type === "Weekly"){
        return {total: (action.total *12 /52).toFixed(2)}
    }
    else if (action.type === "Monthly"){
        return {total:(action.total).toFixed(2)}
    }
    else if (action.type === "Yearly"){
        console.log("REDUCER Yearly");
        return {total:(action.total *12).toFixed(2)}
    }
    else return 0 
}


const BillProvider = ({children}) =>{
    const [bills, setBills] = useState([]);
    const [costInterval, setCostInterval] = useState('Monthly');
    //const [finalCost, setFinalCost] = useState(0)
    //const [finalSaved, setFinalSaved] = useState(0)

    const [costTotal, dispatchCostTotal] = useReducer(reducer, {total: 0});
    const [savedTotal, dispatchSavedTotal] = useReducer(reducer, {total: 0});

    useEffect(()=>{
        setBills(JSON.parse(localStorage.getItem('my-bills')) || [])
    }, [setBills] );


    const getMonthTotal = (costs=true, saved=false)=>{
        let monthTotal = 0;
        if (costs) 
            monthTotal = bills.reduce((acc, value)=>{
                if (value.enabled) {
                    return Number(value.monthlyCost) + acc
                } else return acc
            }, 0)
        else if (saved)
            monthTotal  = bills.reduce((acc, value)=>{
            if (!value.enabled) {
                return Number(value.monthlyCost) + acc
            } else return acc
        }, 0)
        return monthTotal
    };


    const updateBills = (bill) =>{    
        
        const data  = [...bills, bill];
        
        data.sort( (a,b) =>{
            if (a.title < b.title){
                return -1
            } else if (a.title < b.title) {
                return 1
            } else return 0 
        }
        )
        console.log("Added bill: ", data);
        localStorage.setItem('my-bills', 
                         JSON.stringify(data));
        setBills(data);    
    }


    const editBill = (updateBill) => {
        const oldBills = bills.filter((bill)=> bill.title !== updateBill.title) 
        const updatedBills = [...oldBills, updateBill]
        updatedBills.sort((a,b) =>{
            if (a.title < b.title){
                return -1
            } else if (a.title < b.title) {
                return 1
            } else return 0 
        }
        )
        console.log("updated bill: ", updatedBills);
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
            dispatchCostTotal,
            dispatchSavedTotal,
            getMonthTotal,
            costTotal,
            savedTotal
        }}>
            {children}
        </BillContext.Provider>
    );

}

export {BillContext,
        BillProvider};