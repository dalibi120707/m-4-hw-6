import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataPage from "./pages/DataPage/DataPage";
import MainPage from "./pages/MainPage/MainPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/dateis" element={<DataPage />} />
      <Route path="/dateis/:id" element={<DetailedPage/>} />
    </Routes>
  );
}

export default App;
