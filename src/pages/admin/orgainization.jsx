import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { UserIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { EditOrg } from "../../widgets/modals/editOrg";
import { ButtonCreate } from "../../widgets/button/create";
import { apiConfig } from "../../configs/connection";
import { BallTriangleSpinner } from "../../widgets/loader/ballTriangle";
import { createOrgService } from "../../services/create-org";
// import { Link } from "react-router-dom";

export function Origanization() {

  const [loading, setLoading] = React.useState(true);

  const [origanizationList, setOriganizationList] = React.useState([]);
  const [editBoxOpen, setEditBoxOpen] = React.useState(false);
  const [createBoxOpen, setCreateBoxOpen] = React.useState(false);
  const [editData, setEditData] = React.useState({});

  const [orgInfo, setOrgInfo] = React.useState({
    name: "",
    description: "",
    parentId: 1
  });

  const getOrgList = async () => {
    try {

      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
      };

      let response = await fetch(
        `${apiConfig.base_url}/organization/get/child/all`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();

      if (response.status === 200) {
        setOriganizationList(data);
      } else {
        setOriganizationList([]);
      }

    } catch (error) {
      console.error(error);
      setOriganizationList([]);
    }

    setLoading(false);
  };

  // const deleteOrg = async (id) => {
  //   let headersList = {
  //     Authorization:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjMwMTUsImV4cCI6MTcwOTIwOTQxNX0.0vYezmjkZauQgTuxA89N_BKqPyEjNi1NEIwufK3uyLk",
  //   };

  //   let response = await fetch(`http://localhost:3501/api/admin/roles/${id}`, {
  //     method: "DELETE",
  //     headers: headersList,
  //   });

  //   let data = await response.json();

  //   if (data.status) {
  //     getOrgList();
  //   }
  //   window.alert(data.msg);
  // };

  const createHandler = async () => {
    try {
      const token = localStorage.getItem("accessToken") || "";
      let orgStatus = await createOrgService(token, orgInfo);

      if (typeof orgStatus === 'boolean' && orgStatus) {
        getOrgList();
        setOrgInfo({
          name: "",
          description: "",
          parentId: 1
        })
        window.alert("Organization created!");
      } else {
        window.alert("Organization creation failed!");
      }

    } catch (error) {
      console.log(error);
    }

  };

  // const editHandler = (data) => {

  // };

  React.useEffect(() => {
    getOrgList();
  }, []);

  return (
    <div className="mt-5 h-full">
      <div className="container mx-auto py-4">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Origanization</h1>
          <div className="flex gap-2">
            <ButtonCreate
              type="button"
              text="Create"
              onClick={() => setCreateBoxOpen(true)}
            />
          </div>
        </div>
        {/* <EditOrg
          title={"Edit Organization"}
          open={editBoxOpen}
          setOpen={setEditBoxOpen}
          data={orgInfo}
          setData={setOrgInfo}
          onSave={editHandler}
        /> */}

        <EditOrg
          title={"Create Organization"}
          open={createBoxOpen}
          setOpen={setCreateBoxOpen}
          data={orgInfo}
          setData={setOrgInfo}
          onSave={createHandler}
        />
        {loading ?
          <div className="w-full flex justify-center">
            <div className="my-4">
              <BallTriangleSpinner />
            </div>
          </div>
          :
          <div className="grid grid-cols-1 gap-4">
            {origanizationList.length === 0 ?
              <div className="w-full">
                <img src="/static/Images/no-data.jpg" alt="No data" className="mx-auto h-64 w-72" />
              </div>
              :
              origanizationList.map((item) => (
                <div
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between"
                  key={item.id}
                >
                  <div className="flex flex-col gap-0 w-full md:w-3/4">
                    <h2 className="text-lg font-semibold capitalize">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* <div className="mt-4 md:justify-end gap-2 w-full md:w-1/4">
                    <Tooltip content="Members">
                      <button className="bg-green-500 text-white rounded-full w-10 h-10 hover:bg-green-600 flex justify-center items-center" >
                        <UserIcon className="w-5 h-5 text-white" />
                      </button>
                    </Tooltip>

                    <Tooltip content="Edit">
                      <button
                        className="bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-600 flex justify-center items-center"
                        onClick={() => {
                          setEditBoxOpen(true);
                          setEditData(item);
                        }}
                      >
                        <PencilIcon className="w-5 h-5 text-white" />
                      </button>
                    </Tooltip>

                    <Tooltip content="Delete">
                      <button
                        className="bg-red-500 text-white rounded-full w-10 h-10 hover:bg-red-600 flex justify-center items-center"
                        onClick={() => {
                          window.confirm(
                            "Are you confirm that you want to delete this."
                          ) &&
                            setOriganizationList(
                              origanizationList.filter((e) => e._id !== item._id)
                            );
                        }}
                      >
                        <TrashIcon className="w-5 h-5 text-white" />
                      </button>
                    </Tooltip>
                  </div> */}
                </div>
              ))
            }
          </div>
        }
      </div>
    </div>
  );
}
