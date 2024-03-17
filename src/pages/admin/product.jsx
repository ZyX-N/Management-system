import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { UserIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { ButtonCreate } from "../../widgets/button/create";
import { apiConfig } from "../../configs/connection";
import { ProductPopup } from "../../widgets/modals/product";
import { BallTriangleSpinner } from "../../widgets/loader/ballTriangle";

const activeStatus = [
  { name: "True", value: true },
  { name: "False", value: false },
];

export function Product() {

  const [loading, setLoading] = React.useState(true);

  const [itemList, setItemList] = React.useState([]);
  const [categoryList, setCategoryList] = React.useState([]);
  const [unitList, setUnitList] = React.useState([]);

  const [editBoxOpen, setEditBoxOpen] = React.useState(false);
  const [createBoxOpen, setCreateBoxOpen] = React.useState(false);

  const [activeValue, setActiveValue] = React.useState(activeStatus[0].value);
  const [categoryValue, setCategoryValue] = React.useState("");
  const [unitValue, setUnitValue] = React.useState("");

  const [createData, setCreateData] = React.useState({
    name: "",
    minStockCount: 0,
    description: "",
    stdUnitId: unitValue,
    quantity: 0,
    minStockCount: 0,
    categoryTemplateId: 0,
    stockTypeId: 1
  });

  const [editCategoryId, setEditCategoryId] = React.useState(0);
  const [editCategoryValue, setEditCategoryValue] = React.useState("");
  const [editUnitValue, setEditUnitValue] = React.useState("");

  const [editData, setEditData] = React.useState({
    name: "",
    minStockCount: 0,
    description: "",
    stdUnitId: unitValue,
    quantity: 0,
    minStockCount: 0,
    categoryTemplateId: 0,
    stockTypeId: 1
  });

  const getProductList = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
      };

      let response = await fetch(
        `${apiConfig.base_url}/product/template/query?includeInactive=false`,
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
      console.error(error);
      setItemList([]);
    }

    setLoading(false);
  };

  const getUnits = () => {
    const units = [
      { id: 1, name: "litre", value: "litre" },
      { id: 2, name: "kilo_litre", value: "kilo_litre" },
      { id: 3, name: "meter", value: "meter" },
      { id: 4, name: "kilo_meter", value: "kilo_meter" },
      { id: 5, name: "kilo_gram", value: "kilo_gram" },
      { id: 6, name: "quintal", value: "quintal" },
      { id: 7, name: "tonne", value: "tonne" }
    ]

    setUnitList(units);
  }

  const getCategoryList = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
      };

      let response = await fetch(
        `${apiConfig.base_url}/category/template/list?includeInactive=true`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();

      if (response.status === 200) {
        setCategoryList(data.map((e) => ({ id: e.id, name: e.name, value: e.name })));
      } else {
        setCategoryList([]);
      }

    } catch (error) {
      setCategoryList([]);
      console.error(error);
    }
  };

  // const deleteMember = async (id) => {
  //   let headersList = {
  //     Authorization:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRiNTRkZGFkOGE0ZDA1OWU5NTZhYmYiLCJpYXQiOjE3MDkxMjUwOTksImV4cCI6MTcwOTIxMTQ5OX0.7pW55WQ6RJRRWZpA2CzJ5fLH8dgxrGHWi_ZwnAB6TXs",
  //   };

  //   let response = await fetch(
  //     `http://localhost:3501/api/admin/user/delete/${id}`,
  //     {
  //       method: "DELETE",
  //       headers: headersList,
  //     }
  //   );

  //   let data = await response.json();

  //   if (data.status) {
  //     // getMemberList();
  //   }
  //   window.alert(data.msg);
  // };

  const editHandler = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      let headersList = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      let bodyContent = JSON.stringify({ ...editData, active: activeValue });
      let response = await fetch(`${apiConfig.base_url}/product/template/${editCategoryId}`, {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      });

      if (response.status === 200) {
        window.alert("Product updated successfully!");
        setActiveValue((activeStatus[0].value));
        getProductList();
        setEditData({
          name: "",
          minStockCount: 0,
          description: "",
          stdUnitId: unitValue,
          quantity: 0,
          minStockCount: 0,
          categoryTemplateId: 0,
          stockTypeId: 1
        });
        setEditCategoryValue("");
        setEditUnitValue("");
        setEditCategoryId(0)
      } else {
        window.alert("Product updation failed!");
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
      let bodyContent = JSON.stringify({ ...createData, active: activeValue });
      let response = await fetch(`${apiConfig.base_url}/product/template`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      if (response.status === 201) {
        window.alert("New product created!");
        setActiveValue((activeStatus[0].value));
        getProductList();
        setCreateData({
          name: "",
          minStockCount: 0,
          description: "",
          stdUnitId: unitValue,
          quantity: 0,
          minStockCount: 0,
          categoryTemplateId: 0,
          stockTypeId: 1
        });
        setCategoryValue("");
        setUnitValue("");
      } else {
        window.alert("Category creation failed!");
      }
    } catch (error) {
      console.error(error);
    }
  };


  React.useEffect(() => {
    getProductList();
    getUnits();
    getCategoryList();
  }, []);

  React.useMemo(() => {
    if (unitValue !== "") {
      setCreateData((prev) => ({ ...prev, stdUnitId: unitList.filter((e) => e.name === unitValue)[0].id }));
    }
  }, [unitValue]);

  React.useMemo(() => {
    if (categoryValue !== "") {
      setCreateData((prev) => ({ ...prev, categoryTemplateId: categoryList.filter((e) => e.name === categoryValue)[0].id }));
    }
  }, [categoryValue]);

  React.useMemo(() => {
    if (editUnitValue !== "") {
      setEditData((prev) => ({ ...prev, stdUnitId: unitList.filter((e) => e.name === editUnitValue)[0].id }));
    }
  }, [editUnitValue]);

  React.useMemo(() => {
    if (editCategoryValue !== "") {
      setEditData((prev) => ({ ...prev, categoryTemplateId: categoryList.filter((e) => e.name === editCategoryValue)[0].id }));
    }
  }, [editCategoryValue]);

  return (
    <div className="mt-5 h-full">

      <ProductPopup
        title={"Add product"}
        open={createBoxOpen}
        setOpen={setCreateBoxOpen}
        data={{ ...createData, unitValue, activeValue, categoryValue }}
        setData={setCreateData}
        onSave={createHandler}
        extra={{ units: unitList, categoryList, activeStatus, setActiveValue, setUnitValue, setCategoryValue }}
      />

      <ProductPopup
        title={"Edit product"}
        open={editBoxOpen}
        setOpen={setEditBoxOpen}
        data={{ ...editData, unitValue: editUnitValue, activeValue, categoryValue: editCategoryValue }}
        setData={setEditData}
        onSave={editHandler}
        extra={{ units: unitList, categoryList, activeStatus, setActiveValue, setUnitValue: setEditUnitValue, setCategoryValue: setEditCategoryValue }}
      />
      <div className="container mx-auto py-4">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Product</h1>
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
                  <div className="flex-auto block py-8 pt-6 px-9">
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
                              Quantity
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
                          {
                            itemList.length === 0 ?
                              <tr>
                                <td colSpan={5}>
                                  <img src="/static/Images/no-data.jpg" alt="No data" className="mx-auto h-64 w-72" />
                                </td>
                              </tr>
                              :
                              itemList.map((item) => (
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
                                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-base/none text-success bg-success-light rounded-lg">
                                      {item.quantity || "N/A"}
                                    </span>
                                  </td>
                                  <td className="py-1 pr-0 text-center max-w-[200px]">
                                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-base/none text-success bg-success-light rounded-lg capitalize">
                                      {item.stdUnitId ? unitList.filter((e) => e.id === item.stdUnitId)[0].name.split("_").join(" ") : "N/A"}
                                    </span>
                                  </td>
                                  <td className="py-1 text-start max-w-[100px]">
                                    <div className="flex gap-2">
                                      <Tooltip content="Edit">
                                        <button
                                          className="bg-blue-500 text-white size-9 rounded-full hover:bg-blue-600 flex justify-center items-center"
                                          onClick={() => {
                                            setEditBoxOpen(true);
                                            setEditCategoryId(item.id);
                                            setEditData({
                                              name: item.name,
                                              minStockCount: item.minStockCount,
                                              description: item.description,
                                              stdUnitId: item.stdUnitId,
                                              quantity: item.quantity || 0,
                                              minStockCount: item.minStockCount,
                                              categoryTemplateId: item.categoryTemplateId,
                                              stockTypeId: item.stockTypeId
                                            });
                                            setEditUnitValue(unitList.filter((e) => e.id === item.stdUnitId)[0]?.name);
                                            setCategoryValue(categoryList.filter((e) => e.id === item.categoryTemplateId)[0]?.name);
                                          }}
                                        >
                                          <PencilIcon className="size-5 text-white" />
                                        </button>
                                      </Tooltip>
                                      <Tooltip content="Delete">
                                        {/* <button className="bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 flex justify-center items-center" onClick={() => { deleteMember(item._id) }}>
                                                                        <TrashIcon className="w-5 h-5 text-white" />
                                                                    </button> */}
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
                                      </Tooltip>
                                    </div>
                                  </td>
                                </tr>
                              ))
                          }
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