import { Card, CardHeader, Typography } from "@material-tailwind/react";
// import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="mt-5">
      <div class="bg-white flex-1 p-3 w-full mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-lg font-bold mb-2">Total Products</h2>
            <p class="text-3xl font-bold">125</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-lg font-bold mb-2">Total Orders</h2>
            <p class="text-3xl font-bold">98</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-lg font-bold mb-2">Total Revenue</h2>
            <p class="text-3xl font-bold">$5,678</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-lg font-bold mb-2">Total Customers</h2>
            <p class="text-3xl font-bold">230</p>
          </div>
        </div>

        <div className="w-full">
          <div class="w-full bg-white rounded-lg shadow-lg overflow-x-auto">
            <h2 class="text-lg font-bold p-6">Recent Orders</h2>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Brand
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-4 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td class="px-4 py-3">PC</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">300</td>
                  <td class="px-4 py-3">$2999</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-27-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div class="py-1">
                        <a
                          href="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 20&#34;
                  </th>
                  <td class="px-4 py-3">PC</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">200</td>
                  <td class="px-4 py-3">$1499</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-imac-20-dropdown-button"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-20-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-20-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div class="py-1">
                        <a
                          href="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
