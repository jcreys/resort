// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Home";
import SingleRoom from "./pages/Home";
import Error from "./pages/Home";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
