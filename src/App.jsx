import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="relative flex items-center justify-center h-screen min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/70 to-primary/80">
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
