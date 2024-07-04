"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import ExpenditureCard from "./ExpenditureCard";
import { Expenditure } from "@/types/expenditure";
import EditForm from "../expenditure-form/EditForm";

const ShowExpenditures = ({ isHome = false }) => {
    const [expenditures, setExpenditures] = useState<Expenditure[]>([]);
    const [del, setDel] = useState(false);
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
        console.log("GET http://localhost:8000/api/expt");

        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/expt");
                if (isHome) {
                    setExpenditures(res.data.reverse().slice(0, 5));
                } else {
                    setExpenditures(res.data.reverse());
                };
                console.log(res.data);
            } catch (err) {
                console.log(err);
            };
        };

        fetchData();
    }, [del, update]);

    const handleDelete = (id) => {
        const deleteData = async () => {
            try {
                const res = await axios.delete(`http://localhost:8000/api/expt/${id}`);   
                console.log(`Successfully deleted expenditure id ${id}`, res);
                setDel(!del);
            } catch (err) {
                console.log(`Failed to delete expenditure id ${id}`, err);
            };
        };

        deleteData();
    };

    const handleEdit = (id) => {
        console.log(id);
        // set `open` to `true`, to render a different version of `ExpenditureCard`
        setOpen(true);
        setId(id);
    };

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleClose = () => {
        setId("");
        setOpen(false);
    }

    return (
        <div className="ShowExpenditures">
            
            <div className="ExpenditureList">
            {/* map each expt to its own card */}
            {expenditures.map((expt) => (
                <ExpenditureCard key={expt.id} expt={expt} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
            </div>

            {open ? (
                <EditForm id={id} handleUpdate={handleUpdate} handleClose={handleClose} />
            ) : (
                ""
            )}

        </div>
    );
};

export default ShowExpenditures;