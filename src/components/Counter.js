import { useState } from "react"; // Import the useState hook from the react dependency

const Counter = () => {
  const [count, setCount] = useState(0); // Local state variable called count.

  // const [count, ...] - first argument allows you to get the state variable's value
  // const [..., setCount] - second argument allows you to set the state variables's value
  // useState(0) - using the useState hook which sets an initial state value, i.e., 0

  return (
    <div>
      <p>You clicked {count} times</p>{" "}
      {/* Rendering the count state variable in a <p> element. Note: we do not re-render any of the other elements */}
      <button onClick={() => setCount(count + 1)}>
        {" "}
        {/* Increment the count state variable by one */}
        Click me
      </button>
    </div>
  );
};

export default Counter;
