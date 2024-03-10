import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Switch
} from "@material-tailwind/react";
import TextboxSimple from "../inputs/text-box";
import TextAreaSimple from "../inputs/text-area";

export function CreateBasket({ open, setOpen, name, setName, description, setDescription }) {

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
            size="sm"
        >
            <DialogHeader className="font-semibold">Create Basket</DialogHeader>
            <DialogBody className="flex flex-col gap-3">
                <TextboxSimple placeholder="Enter Basket Name" value={name} setValue={setName} size="sm" />
                <TextAreaSimple label="Write a note for this basket" value={description} setValue={setDescription} size="sm" />
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="gradient"
                    color="gray"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Create</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}