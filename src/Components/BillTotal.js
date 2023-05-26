import { useContext} from 'react';
import { BillContext, BillProvider} from '../Context/BillContext';

function BillTotal(){
    const {bills, dispatchTotal, modeTotal} = useContext(BillContext);
    return (
        <>
            <div className="row">
                <div className="col s6">
                    <span className="new badge blue">Сплатити  {
                            bills.reduce((acc, value)=>{
                                if (value.enabled) {
                                    return Number(value.monthlyCost) + acc
                                } else return acc
                            }, 0)
                        } грн.
                    </span>
                </div>

                <div className="col s6">
                    <span className="new badge green"> Зекономлено  {
                            bills.reduce((acc, value)=>{
                                if (!value.enabled) {
                                    return Number(value.monthlyCost) + acc
                                } else return acc
                            }, 0) 
                    } грн.
                    </span>
                </div>

            </div>
        </>
    );
};

export default BillTotal;