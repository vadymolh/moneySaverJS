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
        localStorage.setItem('my-bills', 
                         JSON.stringify(data));
        setBills(data);    
        console.log(bills);
    }

    return(
        <BillContext.Provider value={{
            bills,
            updateBills,
        }}>
            {children}
        </BillContext.Provider>
    );

}

export {BillContext,
        BillProvider};