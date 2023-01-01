import { Breadcrumb } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    path: "/",
    breadcrumbName: "Главная",
  },
  {
    path: "escrow",
    breadcrumbName: "Счета эскроу",
  },
  {
    path: "escrow/details",
    breadcrumbName: 'Эскроу'
  }
];

export const BreadCrumbsContainer = () => {
  const itemRender = (route: any, params: any, routes: any, paths: any) => {
    const location = useLocation();

    const pathUrls = location.pathname.split("/");

    const last = pathUrls.indexOf(route.path) === pathUrls.length - 1;
    console.log({ last, route, pathUrls, location });
    return (
        last ? (<span>{route.breadcrumbName}</span>) : (pathUrls.includes(route) || route.path === '/') && <NavLink to={route.path}>{route.breadcrumbName}</NavLink>
    );
    // <NavLink to={paths.join("/")}>{route.breadcrumbName}</NavLink>
  };

  return <Breadcrumb itemRender={itemRender} routes={routes} />;
};
