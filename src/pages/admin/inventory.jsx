import React from "react";
import {
    Tooltip
} from "@material-tailwind/react";
import { UserIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { EditInventory } from "../../widgets/modals/editInventory";

export function Inventory() {

    const tempData = [
        {
            _id: 1,
            name: "Rice",
            description: "Lorem ipsum dolor sit.",
            quantity: 5
        },
        {
            _id: 2,
            name: "Oil",
            description: "Lorem ipsum dolor sit.",
            quantity: 10
        },
        {
            _id: 3,
            name: "Flour",
            description: "Lorem ipsum dolor sit.",
            quantity: 15
        },
    ]
    const [itemList, setItemList] = React.useState(tempData || []);
    const [roleSelected, setRoleSelected] = React.useState("");
    const [editBoxOpen, setEditBoxOpen] = React.useState(false);
    const [editData, setEditData] = React.useState({});

    const getItemList = async (roleId) => {

        let headersList = {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjUwOTksImV4cCI6MTcwOTIxMTQ5OX0.7pW55WQ6RJRRWZpA2CzJ5fLH8dgxrGHWi_ZwnAB6TXs"
        }

        let response = await fetch("http://localhost:3501/api/admin/inventory/item", {
            method: "POST",
            headers: headersList
        });

        let data = await response.json();

        if (data.status) {
            setItemList(data.data);
        } else {
            setItemList([]);
        }
    }

    const deleteMember = async (id) => {
        let headersList = {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjUwOTksImV4cCI6MTcwOTIxMTQ5OX0.7pW55WQ6RJRRWZpA2CzJ5fLH8dgxrGHWi_ZwnAB6TXs"
        }

        let response = await fetch(`http://localhost:3501/api/admin/user/delete/${id}`, {
            method: "DELETE",
            headers: headersList
        });

        let data = await response.json();

        if (data.status) {
            getMemberList();
        }
        window.alert(data.msg);
    }

    React.useEffect(() => {
        // getItemList();
    }, []);

    const editHandler = (data) => {
        setItemList(itemList.map((item) => {
            if (item._id === data.id) {
                return data;
            } else {
                return item;
            }
        }));
    }

    return (
        <div class="mt-5 h-full">

            <EditInventory open={editBoxOpen} setOpen={setEditBoxOpen} data={editData} onSave={editHandler} />

            <div class="container mx-auto py-4">
                <h1 class="text-3xl font-bold mb-4">Inventory</h1>



                <div class="flex flex-wrap -mx-3 mb-5">
                    <div class="w-full max-w-full px-3 mb-6  mx-auto">
                        <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white">

                            <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">

                                <div class="flex-auto block py-8 pt-6 px-9">
                                    <div class="overflow-x-auto">


                                        <table class="w-full my-0 align-middle text-dark border-neutral-200">
                                            <thead class="align-bottom">
                                                <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                                                    <th class="pb-3 text-start min-w-[175px] uppercase">Name</th>
                                                    <th class="pb-3 text-start min-w-[100px] uppercase">Description</th>
                                                    <th class="pb-3 text-start min-w-[100px] uppercase">Quantity</th>
                                                    <th class="pb-3 text-start min-w-[50px] uppercase">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {itemList.map((item) => (
                                                    <tr class="border-b border-dashed last:border-b-0" key={item._id}>

                                                        <td class="py-3 pl-0">
                                                            <div class="flex items-center">
                                                                <div class="flex flex-col justify-start">
                                                                    <span class="capitalize mb-1 transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {item.name} </span>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="truncate py-3 pr-0 text-start">{item.description}
                                                        </td>

                                                        <td class="py-3 pr-0 text-start">
                                                            <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-base/none text-success bg-success-light rounded-lg">
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                                </svg>  */}
                                                                {item.quantity} </span>
                                                        </td>
                                                        <td class="py-3 text-start">

                                                            <div className="flex gap-2">
                                                                <Tooltip content="Edit">
                                                                    <button className="bg-blue-500 text-white w-10 h-10 rounded-full hover:bg-blue-600 flex justify-center items-center" onClick={() => {
                                                                        setEditBoxOpen(true);
                                                                        setEditData(item);
                                                                    }}>
                                                                        <PencilIcon className="w-5 h-5 text-white" />
                                                                    </button>
                                                                </Tooltip>
                                                                <Tooltip content="Delete">
                                                                    {/* <button className="bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 flex justify-center items-center" onClick={() => { deleteMember(item._id) }}>
                                                                        <TrashIcon className="w-5 h-5 text-white" />
                                                                    </button> */}
                                                                    <button className="bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 flex justify-center items-center" onClick={() => { setItemList(itemList.filter((e) => e._id !== item._id)) }}>
                                                                        <TrashIcon className="w-5 h-5 text-white" />
                                                                    </button>
                                                                </Tooltip>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default Inventory;