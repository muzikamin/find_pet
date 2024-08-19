import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { routes } from "./routes";
import { Detail } from "./Pages/Detail/Detail";
import { PageNotFound } from "./PageNotFound";
import { SaveHeart } from "./Pages/Menu/SaveHeart";
import { Center } from "./Pages/Menu/Center";
import { Header } from "./components/Header";
import { Announ } from "./Pages/Menu/Announ";
import { Protect } from "./Pages/Menu/Protect";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.center} element={<Center />} />
        <Route path={routes.announ} element={<Announ />} />
        <Route path={routes.protect} element={<Protect />} />
        <Route path={routes.saveheart} element={<SaveHeart />} />
        <Route path={routes.search} element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
