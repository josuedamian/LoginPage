import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import Dashboard from "./page/Dashboard";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
