import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                <Counter />
                <Counter />
                <Counter />
            </div>
        </div>
    </>
  );
}

export default App;
