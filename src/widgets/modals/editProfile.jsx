import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import TextboxSimple from "../inputs/text-box";

export function EditProfile({ open, setOpen, data, onSave }) {
  const [name, setName] = useState(data.name || "");
  const [mobile, setMobile] = useState(data.mobile || "");
  const [email, setEmail] = useState(data.email || "");
  const [location, setLocation] = useState(data.location || "");

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
        Edit Profile
      </DialogHeader>
      <DialogBody className="flex flex-col gap-3 pt-0">
        <TextboxSimple
          label="Name"
          value={name}
          setValue={setName}
          size="sm"
          width="w-full"
        />
        <TextboxSimple
          label="Mobile"
          value={mobile}
          setValue={setMobile}
          size="sm"
          width="w-full"
        />
        <TextboxSimple
          label="Email"
          value={email}
          setValue={setEmail}
          size="sm"
          width="w-full"
        />
        <TextboxSimple
          label="Location"
          value={location}
          setValue={setLocation}
          size="sm"
          width="w-full"
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
            onSave({ name, mobile, email, location });
            handleOpen();
          }}
        >
          Save
        </button>

      </DialogFooter>
    </Dialog>
  );
}
