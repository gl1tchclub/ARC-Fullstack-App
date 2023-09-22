import axios from "axios";
import {useEffect, useState} from "react";

const Props = (props) => {
    return (
        <div>
            <h1>{props.firstName}</h1>
            <h2>{props.lastName}</h2>
            <h3>{props.bandName}</h3>
        </div>
    );
};

const ChuckNorris = () => {
        //make variables that can be used and set from state (destructuring props)
        const [norris, setNorris] = useState([]);
        //get req
        const getNorris = async () => {
            try {
                //fetch
                const res = await axios.get(
                  "https://api.chucknorris.io/jokes/random."
                );
                setNorris(res.data);
            } catch (err) {
                console.log(err);
            }
        };
    
        //use the function i suppose. Re-render whatever in array if data changes
        useEffect(() => {
            getNorris();
        }, [norris]);

        return (
            <div>
                <img src={norris.icon_url} alt="Chuck Norris"/>
                <p>{norris.value}</p>
            </div>
        );
}


export {ChuckNorris, Props};