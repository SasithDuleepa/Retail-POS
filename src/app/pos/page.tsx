"use client";
import { useState } from "react";
import Select from "react-select";
import ItemQuickAdd from "@/app/components/itemQuickAdd";
import ItemCategorySearch from "@/app/components/itemCategorySearch";

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

  //quick add item panel
  const [isQuickAdd, setIsQuickAdd] = useState(false);

  //item category search
  const [isCategorySearch, setIsCategorySearch] = useState(false);

  return (
    <div className="">
      {isQuickAdd && <ItemQuickAdd Close={() => setIsQuickAdd(!isQuickAdd)} />}
      {isCategorySearch && (
        <ItemCategorySearch
          Close={() => setIsCategorySearch(!isCategorySearch)}
        />
      )}

      <div className="grid grid-cols-4 grid-rows-1 gap-0 ">
        <div className="col-span-3 h-screen flex flex-col ">
          <div className="h-1/6 bg-[var(--container-bg)]  p-1">
            <div className="w-full h-full border ">
              <p className="sub-title">Customer</p>
              <div className="w-full h-[80%] px-10 flex justify-between items-center">
                <p>Customer :</p>
                <Select
                  className="w-3/6"
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "grey" : "red",
                    }),
                  }}
                />
                <button className="search-btn">Find Customer</button>
              </div>
            </div>
          </div>
          <div className="h-1/6 bg-[var(--container-bg)]  p-1 ">
            <div className="w-full h-full border ">
              <p className="sub-title">Sale Item</p>
              <div className="w-full h-[80%] px-10 flex justify-between items-center">
                <p>Barcode OR Item Name :</p>
                <Select
                  className="w-4/6"
                  options={options}
                  placeholder="Search by Name or Barcode..."
                  isSearchable
                  autoFocus
                  menuPortalTarget={document.body} // Helps with z-index issues
                  menuShouldScrollIntoView={false} // Prevents unexpected scrolling
                //   styles={{
                //     control: (baseStyles, state) => ({
                //       ...baseStyles,
                //       borderColor: state.isFocused ? "grey" : "red",
                //       color: "black",
                //     }),
                //     singleValue: (provided, state) => ({
                //       ...provided,
                //       color: state.data.color,
                //       fontSize: state.selectProps.myFontSize,
                //     }),
                //     option: (provided, state) => ({
                //       ...provided,
                //       fontWeight: state.isSelected ? "bold" : "normal",
                //       color: "black",
                //       backgroundColor: state.data.color,
                //       fontSize: state.selectProps.myFontSize,
                //     }),
                //   }}
                />
                <button
                  className="search-btn"
                  onClick={() => setIsCategorySearch(!isCategorySearch)}
                >
                  Category
                </button>
                <button
                  className="search-btn "
                  onClick={() => setIsQuickAdd(!isQuickAdd)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="h-4/6 bg-blue-700 overflow-hidden flex flex-col">
            <div className="relative flex-1 overflow-hidden">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0  px-2">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-4 py-3">
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
              </table>
              <div className="overflow-y-auto h-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
        </div>
        <div className="col-span-1 h-screen bg-[var(--container-bg)] p-1">
          <div className="border flex flex-col gap-5 py-1 px-1">
            <p className="label"> Payment Type</p>
            <div className="flex justify-around items-center ">
              <button className="btn bg-[#297b10]">CASH</button>
              <button className="btn bg-[#85556d]">CREDIT</button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-1">
            <div className="flex  justify-between items-center">
              <p className="label">No. of Items :</p>
              <p className="label w-max border px-1">XXX</p>
            </div>

            <div>
              <p className="label">Net Total :</p>
              <p className="label border text-right px-1">XXXXX</p>
            </div>

            <div>
              <p className="label">Amount :</p>
              <input className="input h-9 w-full" />
            </div>

            <div>
              <p className="label">Change :</p>
              <p className="label border text-right px-1">XXXXX</p>
            </div>

            <div className="flex justify-end gap-2 items-center">
              <p className="text-2xl">Print bill</p>
              <input type="checkbox" className="size-6" />
            </div>

            <button className="bg-blue-800 w-full px-10 py-5">ENTER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
