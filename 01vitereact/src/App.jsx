import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count * 10);
  };

  return (
    <>
      <h1>Hello World!! {count}</h1>
      <button onClick={handleIncrement}>Increase count</button>
    </>
  );
}

export default App;
