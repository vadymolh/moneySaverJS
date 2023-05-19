import {useState, createContext, useEffect} from 'react';

const BillContext = createContext();

const BillProvider = ({children}) =>{
    const [bills, setBills] = useState([]);

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
        }}>
            {children}
        </BillContext.Provider>
    );

}

export {BillContext,
        BillProvider};