import { Navigate, createBrowserRouter } from "react-router-dom";
import { Customers, Dashboard, Layout, Orders } from "../screens";

export const ROOT = "/";
export const ORDERS = "orders";
export const CUSTOMERS = "customers";
export const DASHBOARD = "dashboard";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      {
        // Redirect to /dashboard when accessing the root path
        index: true,
        path: "",
        element: <Navigate to={DASHBOARD} replace />,
      },
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      { path: ORDERS, element: <Orders /> },
      { path: CUSTOMERS, element: <Customers /> },
    ],
  },
]);
