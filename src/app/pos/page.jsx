"use client";
import { useState } from "react";
import Select from "react-select";

export default function Page() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const products = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
  ];

  //customer
  const [customer, setCustomer] = useState("");
  const [customerSearchList, setCustomerSearchList] = useState([]);

  //item search
  const [itemSearchList, setItemSearchList] = useState([]);

  //selected item list
  const [itemList, setItemList] = useState([]);

  //bill data
  const [netTotal, setNetTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(0);

  //bill print
  const [isPrint, setIsPrint] = useState(true);

  const HandleCustomerSearch = (e) => {};
  const HandleCustomerSelect = (e) => {};

  const HandleItemSearch = (e) => {};
  const HandleItemSelect = (e) => {};

  return (
    <div className="">
      <div className="grid grid-cols-4 grid-rows-1 gap-0 ">
        <div className="col-span-3 h-screen flex flex-col ">
          <div className="h-1/6 bg-[var(--container-bg)]  p-1">
            <div className="w-full h-full border ">
              <p className="sub-title">Customer</p>
              <div className="w-full h-[80%] px-10 flex justify-between items-center">
                <p>Customer :</p>
                {/* <Select
                  className="w-3/6"
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "grey" : "red",
                    }),
                  }}
                /> */}
                <button className="search-btn">Find Customer</button>
              </div>
            </div>
          </div>
          <div className="h-1/6 bg-[var(--container-bg)]  p-1 ">
            <div className="w-full h-full border ">
              <p className="sub-title">Sale Item</p>
              <div className="w-full h-[80%] px-10 flex justify-between items-center">
                <p>Barcode :</p>
                {/* <Select
                  className="w-4/6"
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "grey" : "red",
                    }),
                  }}
                /> */}
                <button className="search-btn">Category</button>
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="h-4/6 bg-blue-700 overflow-y-scroll">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product.name}
                      </th>
                      <td className="px-6 py-4">{product.color}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-screen bg-emerald-400 p-1">
          <div className="h-1/6 border flex flex-col gap-7">
            <p>Payment Type</p>
            <div className="flex justify-around items-center">
              <button className="search-btn">CASH</button>
              <button className="search-btn">CREDIT</button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-15">
            <div className="flex  justify-between items-center">
              <p>No. of Items :</p>
              <p className="w-max border px-1">XXX</p>
            </div>

            <div>
              <p>Net Total :</p>
              <p className="border text-right px-1">XXXXX</p>
            </div>

            <div>
              <p>Amount :</p>
              <input className="border w-full text-right px-1" />
            </div>

            <div>
              <p>Change :</p>
              <p className="border text-right px-1">XXXXX</p>
            </div>

            <div className="flex justify-end gap-2">
              <p>Print bill</p>
              <input type="checkbox" />
            </div>

            <button className="bg-blue-800 w-full px-10 py-5">ENTER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
