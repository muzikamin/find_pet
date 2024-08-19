import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { routes } from "./routes";
import { Detail } from "./Pages/Detail/Detail";
import { PetFind } from "./Pages/Menu/PetFind";
import { PageNotFound } from "./PageNotFound";
import { SaveHeart } from "./Pages/Menu/SaveHeart";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.petfind} element={<PetFind />} />
        <Route path={routes.saveheart} element={<SaveHeart />} />
        <Route path={routes.search} element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
