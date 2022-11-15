import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Register } from "./pages/Register";
import Login from "./pages/User";
import Head from "./components/shared/Head";

function App() {
  return (
    <main className="App">
      <Head title="MyAppTitle" />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Index />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
