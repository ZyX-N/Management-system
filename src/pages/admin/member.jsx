import React from "react";
import {
    Tooltip
} from "@material-tailwind/react";
import { UserIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { EditInventory } from "../../widgets/modals/editInventory";
import { EditMember } from "../../widgets/modals/editMember";

export function Member() {

    const tempData = [
        {
            _id: 1,
            name: "Per A",
            username: "person_a"
        },
        {
            _id: 2,
            name: "Per B",
            username: "person_b"
        },
        {
            _id: 1,
            name: "Per C",
            username: "person_c"
        }
    ]

    const [memberList, setMemberList] = React.useState(tempData || []);
    const [roleSelected, setRoleSelected] = React.useState("");
    const [editBoxOpen, setEditBoxOpen] = React.useState(false);
    const [editData, setEditData] = React.useState({});

    const getMemberList = async (roleId) => {
        let headersList = {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjMwMTUsImV4cCI6MTcwOTIwOTQxNX0.0vYezmjkZauQgTuxA89N_BKqPyEjNi1NEIwufK3uyLk",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "role": roleId || ""
        });

        let response = await fetch("http://localhost:3501/api/admin/user", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();

        if (data.status) {
            setMemberList(data.data);
        } else {
            setMemberList([]);
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

    const editHandler = (data) => {
        setMemberList(memberList.map((item) => {
            if (item._id === data.id) {
                return data;
            } else {
                return item;
            }
        }));
    }

    React.useEffect(() => {
        // getMemberList();
    }, []);

    return (
        <div class="mt-5 h-full">
            <div class="container mx-auto py-4">
                <h1 class="text-3xl font-bold mb-4">Members</h1>
                <EditMember open={editBoxOpen} setOpen={setEditBoxOpen} data={editData} onSave={editHandler} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {memberList.map((item) => (

                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between" key={item._id}>
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600">{item.username}</p>
                            <div className="mt-4 flex gap-2">
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
                                    <button className="bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 flex justify-center items-center" onClick={() => { setMemberList(memberList.filter((e) => e._id !== item._id)) }}>
                                        <TrashIcon className="w-5 h-5 text-white" />
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

export default Member;