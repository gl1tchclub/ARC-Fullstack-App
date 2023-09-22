// useEffect connects the component to, quote, "some external system" which I presume is the API/web client
//
/* const prop1 = ({}) */

import Welcome from "./components/Welcome"; // Importing the Welcome function component
import Counter from "./components/Counter";
import Post from "./components/Post";
import GetProps from "./components/Prop";

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Welcome /> {/* Self-closing tag. <Welcome></Welcome> are equivalent */}
      <Welcome firstName="johnhn" />
      <GetProps firstName="John" lastName="Lennon" bandName="The Beatles"/>
      <Counter />
      <Post />
    </>
  );
};

export default App;