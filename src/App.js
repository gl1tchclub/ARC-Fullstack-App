// useEffect connects the component to, quote, "some external system" which I presume is the API/web client
//

import Welcome from "./components/Welcome"; // Importing the Welcome function component
import Counter from "./components/Counter";
import Post from "./components/Post";

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Welcome /> {/* Self-closing tag. <Welcome></Welcome> are equivalent */}
      <Counter />
      <Post />
    </>
  );
};

export default App;