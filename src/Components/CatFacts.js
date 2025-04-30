import { useId, useState } from 'react';
import axios from 'axios';

function CatFacts(props) {

    const [facts, setFacts] = useState([]);

    const grabCatFact = () => {
        axios.get('https://meowfacts.herokuapp.com/?count=3')
            .then(res => {
                setFacts(res.data.data);
            })
            .catch(err => {
                console.err(err);
            });
    }

    return (
    <div>
        <button onClick={() => grabCatFact()}>GENERATE CAT FACTS</button>
        {facts.length > 0 && facts.map(f => <span><br/>{f}</span>)}
    </div>
    );
}

export default CatFacts;