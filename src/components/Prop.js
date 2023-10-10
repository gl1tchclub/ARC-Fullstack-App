import axios from "axios";
import { useEffect, useState } from "react";

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
  const [norris, setNorris] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  function myUseState (defaultValue) {
    let value = defaultValue;
    const setValue = (newValue) => {value = newValue};

    return [value, setValue]
  }

const [firstName, setFirstName] = myUseState("harry");


  

  //get req
  const getNorris = async () => {
    try {
      //fetch
      const res = await axios.get("https://api.chucknorris.io/jokes/random");
      setNorris(res.data);
      setDataFetched(true);
      // console.log("Icon url:", norris.icon_url);
    } catch (err) {
      console.log(err);
    }
  };

  //use the function i suppose. Re-render whatever in array if data changes
  useEffect(() => {
    if (!dataFetched) {
      getNorris();
      someName = "Johnny"
    }
  }, [dataFetched]);

  return (
    <>
      {dataFetched && (
        <div>
          {/* conditional to check that image and text display when icon exists */}
          {norris.icon_url && <img src={norris.icon_url} alt="Chuck Norris" />}
          <p>{norris.value}</p>
          <p>{someName}</p>
        </div>
      )}
    </>
  );
};

export { ChuckNorris, Props };
