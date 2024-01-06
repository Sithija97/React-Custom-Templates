import { ReactNode } from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CUSTOMERS, DASHBOARD, ORDERS } from "../routes";

type SidebarProps = {
  children: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  const navigate = useNavigate();

  const redirectToDashboard = () => navigate(DASHBOARD);
  const redirectToCustomers = () => navigate(CUSTOMERS);
  const redirectToOrders = () => navigate(ORDERS);

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
          <span className="border-b-[1px] border-gra w-full p-2"></span>
          <div
            className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block"
            onClick={redirectToDashboard}
          >
            <RxDashboard size={20} />
          </div>
          <div
            className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block"
            onClick={redirectToCustomers}
          >
            <RxPerson size={20} />
          </div>
          <div
            className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block"
            onClick={redirectToOrders}
          >
            <HiOutlineShoppingBag size={20} />
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
            <FiSettings size={20} />
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};
