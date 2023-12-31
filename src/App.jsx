import { Provider } from "react-redux";
//import "./App.css";
import Counter from "./component/Counter";
import DynamicHookCounter from "./component/dynamicHookConter";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application with redux
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          <Counter />
          <DynamicHookCounter />
        </div>
      </div>
    </Provider>
  );
}
