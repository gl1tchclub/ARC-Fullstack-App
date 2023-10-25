// useEffect connects the component to, quote, "some external system" which I presume is the API/web client
//
/* const prop1 = ({}) */

import Navigation from "./components/Navigation";
import cors from "cors"; 

const app = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

app.use(cors());

export default app;