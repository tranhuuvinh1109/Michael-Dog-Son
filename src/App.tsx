import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout";
import { HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
