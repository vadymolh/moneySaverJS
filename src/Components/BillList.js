import { useContext} from 'react';
import { BillContext, BillProvider} from '../Context/BillContext';

function BillList(){
    const {bills, editBill} = useContext(BillContext);
    console.log(bills);
    return (
        
    <div class="card horizontal">
        <div class="card-content">
            <div class="collection">
      
            {   
                bills.map((bill, index)=>{
                    return (
                     
                        <a href="#!" 
                        className={bill.enabled ? "collection-item active": "collection-item"}
                        key={index} 
                        onClick={
                            ()=>{editBill({
                                "title": bill.title,
                                "monthlyCost": bill.monthlyCost,
                                "enabled": !bill.enabled 
                            })}
                        }>
                            {bill.title} - {bill.monthlyCost} грн.
                        </a>
                    )
                })
            }
            </div>
        </div>  
    </div>
    )

}


export default BillList;