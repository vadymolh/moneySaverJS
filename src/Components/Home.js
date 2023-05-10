import { useState } from 'react';

const Home = () => {
    

    const [number, setNumber] = useState(Math.random());
    const rand = ()=>{
        setNumber(Math.random());
    }

    return(
        <div className="container">
            <h2>Головна сторінка</h2>
            <br/><br/><br/>
            <h3>{number}</h3>
            <button onClick={rand}>Generate</button>
        </div>
    );
}

export default Home;
