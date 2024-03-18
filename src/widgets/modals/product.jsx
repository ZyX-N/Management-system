import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import TextboxSimple from "../inputs/text-box";
import { DropdownSimple } from "../inputs/dropdown-limited-option";

export function ProductPopup({ title, open, setOpen, data, setData, onSave, extra }) {

    const handleOpen = () => setOpen(!open);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className="flex flex-col justify-around"
            size="xs"
        >
            <DialogHeader className="font-semibold">
                <UserCircleIcon className="w-9 h-9 text-blue-700 bg-blue-200 rounded-full p-0.5 mr-2" />
                {title}
            </DialogHeader>
            <DialogBody className="flex flex-col gap-2 pt-0">
                <TextboxSimple
                    label="Name"
                    value={data.name}
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, name: e.target.value }));
                    }}
                    size="sm"
                    width="w-full"
                />
                <TextboxSimple
                    label="Description"
                    value={data.description}
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, description: e.target.value }));
                    }}
                    size="sm"
                    width="w-full"
                />
                <DropdownSimple
                    label="Category"
                    size="sm"
                    options={extra.categoryList}
                    value={data.categoryValue}
                    setValue={extra.setCategoryValue}
                />
                {/* <TextboxSimple
                    type="number"
                    label="Quantity"
                    value={data.quantity}
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, quantity: Number(e.target.value) }));
                    }}
                    size="sm"
                    width="w-full"
                /> */}
                <DropdownSimple
                    label="Unit"
                    size="sm"
                    options={extra.units}
                    value={data.unitValue}
                    setValue={extra.setUnitValue}
                />
                <TextboxSimple
                    type="number"
                    label="Min Stock"
                    value={data.minStockCount}
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, minStockCount: Number(e.target.value) }));
                    }}
                    size="sm"
                    width="w-full"
                />
                <DropdownSimple
                    label="Active"
                    size="sm"
                    options={extra.activeStatus}
                    value={data.activeValue}
                    setValue={extra.setActiveValue}
                />
            </DialogBody>
            <DialogFooter className="flex-col-reverse sm:flex-row gap-2">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto active:opacity-[0.85]"
                    onClick={handleOpen}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 hover:bg-blue-500 sm:ml-2 sm:w-auto active:opacity-[0.85] hover:scale-105 transition-all duration-75"
                    onClick={() => {
                        onSave();
                        handleOpen();
                    }}
                >
                    Save
                </button>
            </DialogFooter>
        </Dialog>
    );
}
