import "./App.css";
import Header from "./components/Header/header";
import Homepage from "./components/Pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crmdetails from "./components/Pages/crmdetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details" element={<Crmdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
