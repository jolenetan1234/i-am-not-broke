"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import ExpenditureCard from "../expt-card/ExpenditureCard";
import { Expenditure } from "@/features/crud/types/expenditure";
import EditForm from "../edit-form/EditForm";
import ConfirmDelete from "../confirm-delete/ConfirmDelete";

// HARD-CODED
const userId = 1;

const ShowExpenditures = ({ isHome = false }) => {
    const [expenditures, setExpenditures] = useState<Expenditure[]>([]);
    const [del, setDel] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
        console.log(`GET http://localhost:8000/api/expt/user/${userId}`);

        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/expt/user/${userId}`);
                if (isHome) {
                    setExpenditures(res.data.reverse().slice(0, 5));
                } else {
                    setExpenditures(res.data.reverse());
                };
                console.log(`Successfuly GET http://localhost:8000/api/expt/user/${userId}`, res.data);
            } catch (err) {
                console.log(err);
            };
        };

        fetchData();
    }, [del, update]);

    // DELETE POPUP
    const handleDelete = (id) => {
        setDeleteOpen(true);
        setId(id);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
        setId("");
    };

    const handleDeleteConfirm = (id) => {

        const deleteData = async () => {
            console.log(`Sending DELETE request for expenditure id ${id}`);

            try {
                const res = await axios.delete(`http://localhost:8000/api/expt/user/${userId}/${id}`);   
                console.log(`Successfully deleted expenditure id ${id}`, res);

                setDel(!del);

                handleDeleteClose();
            } catch (err) {
                console.log(`Failed to delete expenditure id ${id}`, err);
            };
        };

        deleteData();
    };

    // EDIT POPUP
    const handleEdit = (id) => {
        setEditOpen(true);
        setId(id);
    };

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleEditClose = () => {
        setId("");
        setEditOpen(false);
    }

    return (
        <div className="ShowExpenditures">
            
            <div className="ExpenditureList">
            {/* map each expt to its own card */}
            {expenditures.map((expt) => (
                <ExpenditureCard key={expt.id} expt={expt} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
            </div>

            {editOpen ? (
                <EditForm id={id} handleUpdate={handleUpdate} handleClose={handleEditClose} />
            ) : (
                ""
            )}

            {deleteOpen ? (
                <ConfirmDelete
                id={id}
                handleDeleteClose={handleDeleteClose}
                handleDeleteConfirm={handleDeleteConfirm}
                />
            ) : (
                ""
            )}

        </div>
    );
};

export default ShowExpenditures;