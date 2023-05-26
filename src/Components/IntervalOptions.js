import { useContext} from 'react';
import { BillContext, BillProvider} from '../Context/BillContext';

function IntervalOptions(){
    const {costInterval, setCostInterval, dispatchTotal, modeTotal} = useContext(BillContext);
    return ( 
    <>
    <div className="row">
        <div className="col s3">
            <div className="card-panel" onClick={(e)=>{ 
                setCostInterval("Daily")
                dispatchTotal({type:costInterval, total:0})}}>
                <span className={ costInterval==="Daily" ? "blue-text text-darken-2": "black-text"}>За день</span>
            </div>
        </div>
        <div className="col s3">
            <div className="card-panel" onClick={(e)=> setCostInterval("Weekly")}>
                <span className={ costInterval==="Weekly" ? "blue-text text-darken-2": "black-text"}>Щотижня</span>
            </div>
        </div>
        <div className="col s3">
            <div className="card-panel" onClick={(e)=> setCostInterval("Monthly")}>
                <span className={ costInterval==="Monthly" ? "blue-text text-darken-2": "black-text"}>Щомісяця</span>
            </div>
        </div>
        <div className="col s3">
            <div className="card-panel" onClick={(e)=> setCostInterval("Yearly")}>
                <span className={ costInterval==="Yearly" ? "blue-text text-darken-2": "black-text"}>Щороку</span>
            </div>
        </div>
    </div>
    </>
    );
};

export default IntervalOptions;