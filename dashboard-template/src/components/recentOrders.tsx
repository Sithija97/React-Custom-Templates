import { DataElement, data } from "../data";
import { FaShoppingBag } from "react-icons/fa";

export const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll">
      <h1 className="font-medium">Recent Orders</h1>
      <ul>
        {data.map((order: DataElement, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-blue-100 rounded-lg p-3">
              <FaShoppingBag className="text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm font-medium">
                {order.name.first}
              </p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm font-medium">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
