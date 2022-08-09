import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainPage/Main";
import { store } from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
