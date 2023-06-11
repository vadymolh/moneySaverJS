import { useContext} from 'react';
import { BillContext, BillProvider} from '../Context/BillContext';

function BillTotal(){
    const { bills, 
            dispatchCostTotal,
            dispatchSavedTotal,
            modeTotal,
            getMonthTotal,
            costTotal,
            savedTotal,
            costInterval
        } = useContext(BillContext);
    return (
        <>
            <div className="row">
                <div className="col s6">
                    <div class="card small red accent-1">
                        <br></br>
                        <h2 class="center-align">Сплачую: 
                        </h2>
                        <h2 class="center-align">
                            {costTotal.total} 
                        </h2>
                    </div>
                </div>

                <div className="col s6">
                    <div class="card small teal accent-1">
                        <br></br>
                        <h2 class="center-align"> Економія:</h2>
                        <h2 class="center-align">
                            {savedTotal.total} 
                        </h2>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BillTotal;