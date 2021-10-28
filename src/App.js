import { BrowserRouter as Router } from "react-router-dom";

// import Phonebook from "./components/Phonebook/Phonebook";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Header />
            <Routes />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
