import { TRoute } from "@/types";

export const HOME_ROUTE: TRoute = {
  pathname: "/[page]",
  basePath: "/",
};
export const BREED_PAGE_ROUTE: TRoute = {
  pathname: "/breed/[kind]/[id]",
  basePath: "/breed/",
};

export const Routes: TRoute[] = [HOME_ROUTE, BREED_PAGE_ROUTE];
