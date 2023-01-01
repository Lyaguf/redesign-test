import { Route, Routes } from "react-router";
import { LayoutContainer } from "../layout/LayoutContainer";
import { Main } from "../main/Main";

export const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        {/* <Route element={<Main />}/> */}
      </Route>
    </Routes>
  );
};
