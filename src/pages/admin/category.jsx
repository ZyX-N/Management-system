import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { CategoryPopup } from "../../widgets/modals/category";
import { ButtonCreate } from "../../widgets/button/create";
import { apiConfig } from "../../configs/connection";
import { BallTriangleSpinner } from "../../widgets/loader/ballTriangle";
import { unitListService } from "../../services/unit-list";

const activeStatus = [
  { name: "True", value: true },
  { name: "False", value: false },
];

export function Category() {

  const [loading, setLoading] = React.useState(true);

  const [itemList, setItemList] = React.useState([]);
  const [unitList, setUnitList] = React.useState([]);

  const [editBoxOpen, setEditBoxOpen] = React.useState(false);
  const [createBoxOpen, setCreateBoxOpen] = React.useState(false);

  const [unitValue, setUnitValue] = React.useState("");
  const [editUnitValue, setEditUnitValue] = React.useState("");
  const [activeValue, setActiveValue] = React.useState(activeStatus[0].value);

  const [createData, setCreateData] = React.useState({
    name: "",
    description: "",
    active: true,
    activeByDefault: true,
    stdUnitId: unitValue,
  });

  const [editCategoryId, setEditCategoryId] = React.useState(0);
  const [editData, setEditData] = React.useState({
    name: "",
    description: "",
    active: true,
    activeByDefault: true,
    stdUnitId: unitValue,
  });

  const token = localStorage.getItem("accessToken");

  const getCategoryList = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
      };

      //    let response = await fetch(`${apiConfig.base_url}/category/template/list?includeInactive=true&skip=0&limit=30`, {
      let response = await fetch(
        `${apiConfig.base_url}/category/template/list?includeInactive=true`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();

      if (response.status === 200) {
        setItemList(data);
      } else {
        setItemList([]);
      }

    } catch (error) {
      setItemList([]);
      console.error(error);
    }
    setLoading(false);
  };

  const editHandler = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      let bodyContent = JSON.stringify(editData);
      let response = await fetch(`${apiConfig.base_url}/category/template/${editCategoryId}`, {
        method: "PATCH",
        body: bodyContent,
        headers: headersList,
      });

      if (response.status === 200) {
        window.alert("Category updated successfully!");
        getCategoryList();
        setActiveValue((activeStatus[0].value));
        setEditData({
          name: "",
          description: "",
          active: true,
          activeByDefault: true,
          stdUnitId: unitValue,
        });
      } else {
        window.alert("Category updation failed!");
      }

    } catch (error) {
      console.error(error);
    }
  };

  const createHandler = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      let bodyContent = JSON.stringify(createData);
      let response = await fetch(`${apiConfig.base_url}/category/template`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      if (response.status === 201) {
        window.alert("New category created!");
        getCategoryList();
        setActiveValue((activeStatus[0].value));
        setCreateData({
          name: "",
          description: "",
          active: true,
          activeByDefault: true,
          stdUnitId: unitValue,
        });
      } else {
        window.alert("Category creation failed!");
      }

    } catch (error) {
      console.error(error);
    }
  };

  const getUnits = async () => {
    let units = await unitListService(token)
    units = units.map((item) => {
      return { id: item.id, name: item.name, value: item.name }
    });
    setUnitList(units);
  }

  React.useEffect(() => {
    getCategoryList();
    getUnits()
  }, []);

  React.useMemo(() => {
    if (unitValue !== "") {
      setCreateData((prev) => ({ ...prev, stdUnitId: unitList.filter((e) => e.name === unitValue)[0].id }));
    }
  }, [unitValue]);

  React.useMemo(() => {
    if (editUnitValue !== "") {
      setEditData((prev) => ({ ...prev, stdUnitId: unitList.filter((e) => e.name === editUnitValue)[0]?.id }));
    }
  }, [editUnitValue]);

  return (
    <div className="mt-5 h-full">
      <CategoryPopup
        title={"Edit category"}
        open={editBoxOpen}
        setOpen={setEditBoxOpen}
        data={{ ...editData, unitValue: editUnitValue, activeValue }}
        setData={setEditData}
        onSave={editHandler}
        extra={{ units: unitList, activeStatus, setUnitValue: setEditUnitValue, setActiveValue }}
      />

      <CategoryPopup
        title={"Add category"}
        open={createBoxOpen}
        setOpen={setCreateBoxOpen}
        data={{ ...createData, unitValue, activeValue }}
        setData={setCreateData}
        onSave={createHandler}
        extra={{ units: unitList, activeStatus, setUnitValue, setActiveValue }}
      />
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Category</h1>
          <div className="flex gap-2">
            <ButtonCreate
              type="button"
              text="Create"
              onClick={() => setCreateBoxOpen(true)}
            />
          </div>
        </div>
        {loading ?
          <div className="w-full flex justify-center">
            <div className="my-4">
              <BallTriangleSpinner />
            </div>
          </div>
          :
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full max-w-full px-3 mb-6  mx-auto">
              <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white">

                <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">

                  <div className="flex-auto block py-8 pt-6 px-4">

                    <div className="overflow-x-auto">
                      <table className="w-full my-0 align-middle text-dark border-neutral-200">
                        <thead className="align-bottom">
                          <tr className="font-semibold text-sm text-secondary-dark">
                            <th className="pb-3 text-start min-w-[125px] max-w-[225px] uppercase">
                              Name
                            </th>
                            <th className="pb-3 text-start min-w-[125px] max-w-[225px] uppercase">
                              Description
                            </th>
                            <th className="pb-3 text-center min-w-[100px] max-w-[200px] uppercase">
                              Unit
                            </th>
                            <th className="pb-3 text-start min-w-[50px] max-w-[100px] uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {itemList.length === 0 ?
                            <tr>
                              <td colSpan={4}>
                                <img src="/static/Images/no-data.jpg" alt="No data" className="mx-auto h-64 w-72" />
                              </td>
                            </tr>
                            : itemList.map((item) => (
                              <tr
                                className="border-b border-dashed last:border-b-0"
                                key={item.id}
                              >
                                <td className="py-1 pl-0 max-w-[225px]">
                                  <div className="flex items-center">
                                    <div className="flex flex-col justify-start">
                                      <span className="capitalize mb-1 transition-colors duration-200 ease-in-out text-base text-secondary-inverse hover:text-primary">
                                        {" "}
                                        {item.name}{" "}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="truncate py-1 pr-0 text-start max-w-[225px]">
                                  {item.description}
                                </td>
                                <td className="py-1 pr-0 text-center max-w-[200px]">
                                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-base/none text-success bg-success-light rounded-lg capitalize">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                                </svg>  */}
                                    {item.stdUnit.name.split("_").join(" ") || ""}
                                  </span>
                                </td>
                                <td className="py-1 text-start max-w-[100px]">
                                  <div className="flex gap-2">
                                    <Tooltip content="Edit">
                                      <button
                                        className="bg-blue-500 text-white size-9 rounded-full hover:bg-blue-600 flex justify-center items-center"
                                        onClick={() => {
                                          setEditBoxOpen(true);
                                          setEditData({
                                            name: item.name,
                                            description: item.description,
                                            active: item.active,
                                            activeByDefault: item.activeByDefault,
                                            stdUnitId: item.stdUnitId,
                                          });
                                          setEditUnitValue(unitList.filter((e) => e.id === item.stdUnitId)[0]?.name);
                                          setEditCategoryId(item.id);
                                        }}
                                      >
                                        <PencilIcon className="size-5 text-white" />
                                      </button>
                                    </Tooltip>
                                    {/* <Tooltip content="Delete">
                                  <button
                                    className="bg-red-500 text-white size-9 rounded-full hover:bg-red-600 flex justify-center items-center"
                                    onClick={() => {
                                      window.confirm(
                                        "Are you confirm that you want to delete this."
                                      ) &&
                                        setItemList(
                                          itemList.filter(
                                            (e) => e._id !== item._id
                                          )
                                        );
                                    }}
                                  >
                                    <TrashIcon className="size-5 text-white" />
                                  </button>
                                </Tooltip> */}
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
        }
      </div>
    </div>
  );
}

export default Category;
