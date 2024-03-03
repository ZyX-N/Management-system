import React from "react";
import {
    Tooltip
} from "@material-tailwind/react";
import { UserIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { EditRole } from "../../widgets/modals/editRole";
// import { Link } from "react-router-dom";

export function Role() {

    const tempData = [
        {
            _id: 1,
            name: "Admin",
            description: "Role Description Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            _id: 2,
            name: "Level 1",
            description: "Role Description Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            _id: 3,
            name: "Level 3",
            description: "Role Description Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]

    const [roleList, setRoleList] = React.useState(tempData || []);
    const [editBoxOpen, setEditBoxOpen] = React.useState(false);
    const [editData, setEditData] = React.useState({});

    const getRoleList = async () => {
        let headersList = {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjMwMTUsImV4cCI6MTcwOTIwOTQxNX0.0vYezmjkZauQgTuxA89N_BKqPyEjNi1NEIwufK3uyLk"
        }

        let response = await fetch("http://localhost:3501/api/admin/roles", {
            method: "GET",
            headers: headersList
        });

        let data = await response.json();

        if (data.status) {
            setRoleList(data.data);
        } else {
            setRoleList([]);
        }
    }

    const deletRole = async (id) => {
        let headersList = {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjMwMTUsImV4cCI6MTcwOTIwOTQxNX0.0vYezmjkZauQgTuxA89N_BKqPyEjNi1NEIwufK3uyLk"
        }

        let response = await fetch(`http://localhost:3501/api/admin/roles/${id}`, {
            method: "DELETE",
            headers: headersList
        });

        let data = await response.json();

        if (data.status) {
            getRoleList();
        }
        window.alert(data.msg);
    }

    const editHandler = (data) => {
        setRoleList(roleList.map((item) => {
            if (item._id === data.id) {
                return data;
            } else {
                return item;
            }
        }));
    }

    React.useEffect(() => {
        // getRoleList();
    }, []);

    return (
        <div class="mt-5 h-full">
            <div class="container mx-auto py-4">
                <h1 class="text-3xl font-bold mb-4">Roles</h1>
                <EditRole open={editBoxOpen} setOpen={setEditBoxOpen} data={editData} onSave={editHandler} />
                <div class="grid grid-cols-1 gap-4">

                    {roleList.map((item) => (
                        <div class="bg-white shadow-lg rounded-lg p-6 flex justify-between" key={item._id}>
                            <div className="flex flex-col gap-0 w-3/4">
                                <h2 class="text-lg font-semibold capitalize">{item.name}</h2>
                                <p class="text-gray-600">{item.description}</p>
                            </div>
                            <div class="mt-4 flex justify-end gap-2 w-1/4">

                                <Tooltip content="Members">
                                    <button class="bg-green-500 text-white rounded-full w-10 h-10 hover:bg-green-600 flex justify-center items-center" >
                                        <UserIcon class="w-5 h-5 text-white" />
                                    </button>
                                </Tooltip>

                                <Tooltip content="Edit">
                                    <button class="bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-600 flex justify-center items-center" onClick={() => {
                                        setEditBoxOpen(true);
                                        setEditData(item);
                                    }}>
                                        <PencilIcon class="w-5 h-5 text-white" />
                                    </button>
                                </Tooltip>

                                <Tooltip content="Delete">
                                    {/* <button class="bg-red-500 text-white rounded-full w-10 h-10 hover:bg-red-600 flex justify-center items-center"
                                        onClick={() => { deletRole(item._id) }}
                                    >
                                        <TrashIcon class="w-5 h-5 text-white" />
                                    </button> */}
                                    <button class="bg-red-500 text-white rounded-full w-10 h-10 hover:bg-red-600 flex justify-center items-center"
                                        onClick={() => { setRoleList(roleList.filter((e) => e._id !== item._id)) }}
                                    >
                                        <TrashIcon class="w-5 h-5 text-white" />
                                    </button>
                                </Tooltip>

                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>

    );
}

export default Role;