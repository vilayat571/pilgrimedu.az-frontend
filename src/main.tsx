import "./assets/styles/index.css";
import Blogs from "./pages/Blogs/Blogs.tsx";
import SingleBlog from "./pages/Blogs/SingleBlog.tsx";
import Scholarships from "./pages/Scholarships/Scholarships.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import ResetPass from "./pages/ForgotPassword/ResetPass.tsx";
import NewPass from "./pages/ForgotPassword/NewPass.tsx";
import ReactDOM from "react-dom/client";
import App from "./pages/Main/App.tsx";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { HelmetProvider } from "react-helmet-async";
import MainPage from "./pages/Dashboard/MainPage.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/teqaudler" element={<Scholarships />} />
          <Route path="/daxilol" element={<Login />} />
          <Route path="/hesabac" element={<Register />} />
          <Route path="/bloqlar" element={<Blogs />} />
          <Route path="/bloqlar/:id" element={<SingleBlog />} />
          <Route path="/shifreyenile" element={<ResetPass />} />
          <Route path="/shifreyenile/:id" element={<NewPass />} />
          <Route path={`/istifadechihesabı`} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </HelmetProvider>
);
