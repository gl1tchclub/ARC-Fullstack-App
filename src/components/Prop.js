import axios from "axios";

const GetProps = (props) => {
    

    return (
        <div>
            <h1>{props.firstName}</h1>
            <h2>{props.lastName}</h2>
            <h3>{props.bandName}</h3>
        </div>
    );
};

export default GetProps;