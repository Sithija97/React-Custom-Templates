import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DataElement, data } from "../data";

export const Orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="font-medium">Orders</h2>
        <h2 className="font-medium">Welcome Back, Sithija</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span className="font-medium">Order</span>
            <span className="sm:text-left text-right font-medium">Status</span>
            <span className="hidden md:grid font-medium">Last Order</span>
            <span className="hidden sm:grid font-medium">Method</span>
          </div>
          <ul>
            {data.map((order: DataElement, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 text-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 p-2 rounded-lg font-medium"
                        : order.status == "Completed"
                        ? "bg-blue-200 p-2 rounded-lg font-medium"
                        : "bg-yellow-200 p-2 rounded-lg font-medium"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex font-medium">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center font-medium">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
