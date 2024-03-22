import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { ButtonCreate } from "../../widgets/button/create";
import { ProductPopup } from "../../widgets/modals/product";
import { addMemberService } from "../../services/sign-up";

const activeStatus = [
  { name: "True", value: true },
  { name: "False", value: false },
];

export function Member() {
  const [data, setData] = React.useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    // phoneNumber: "",
    password: "",
    orgId: 0,
  });

  const submitHandler = async (e) => {
    e.preventDefault()
    const status = await addMemberService(data);
    console.log(status);
  };

  return (
    <div className="mt-5 h-full">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Add Member</h1>
          {/* <div className="flex gap-2">
            <ButtonCreate
              type="button"
              text="Create"
              onClick={() => setCreateBoxOpen(true)}
            />
          </div> */}
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block pt-4 px-9">
                  <form className="w-full" onSubmit={submitHandler}>
                    <div class="mb-4">
                      <label
                        for="firstName"
                        class="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={data.firstName}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="middleName"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={data.middleName}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            middleName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="lastName"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={data.lastName}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        value={data.email}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    {/* <div class="mb-4">
                      <label
                        for="phoneNumber"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        value={data.phoneNumber}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }));
                        }}
                      />
                    </div> */}
                    <div class="mb-4">
                      <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        value={data.password}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="orgId"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Organization ID
                      </label>
                      <input
                        type="number"
                        id="orgId"
                        name="orgId"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        value={data.orgId}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            orgId: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
