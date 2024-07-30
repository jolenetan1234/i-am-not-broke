// types
import { Expenditure } from "@/features/crud/types/expenditure";

// components
import ExpenditureCard from "../expt-card/ExpenditureCard";
import EditForm from "../edit-form/EditForm";
import ConfirmDelete from "../confirm-delete/ConfirmDelete";

// hooks
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useFetchData from "../../hooks/useFetchData";
import useDelete from "../../hooks/useDelete";
import useEdit from "../../hooks/useEdit";

// HARD-CODED
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "/";

const ShowExpenditures = ({ isHome = false }) => {
    const [expenditures, setExpenditures] = useState<Expenditure[]>([]);
    const [del, setDel] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [exptId, setExptId] = useState("");
    const [userId, setUserId] = useState(localStorage.getItem("userId") ?? "");

    // hooks
    const router = useRouter();

    if (userId) {
        useEffect(() => {
            useFetchData(userId, isHome, setExpenditures);
        }, [del, update]);

        const { handleDelete, handleDeleteClose, handleDeleteConfirm } = useDelete(userId, del, setDeleteOpen, setExptId, setDel);
        
        // EDIT handlers
        const { handleEdit, handleUpdate, handleEditClose } = useEdit(setEditOpen, setExptId, setUpdate, update);

        return (
            <div className="ShowExpenditures">
                
                <div className="ExpenditureList">
                {/* map each expt to its own card */}
                {expenditures.map((expt) => (
                    <ExpenditureCard key={expt.id} expt={expt} handleDelete={handleDelete} handleEdit={handleEdit} />
                ))}
                </div>
    
                {editOpen ? (
                    <EditForm exptId={exptId} handleUpdate={handleUpdate} handleEditClose={handleEditClose} />
                ) : (
                    ""
                )}
    
                {deleteOpen ? (
                    <ConfirmDelete
                    id={exptId}
                    handleDeleteClose={handleDeleteClose}
                    handleDeleteConfirm={handleDeleteConfirm}
                    />
                ) : (
                    ""
                )}
    
            </div>
        );

    } else {
        router.push(LOGIN_URL);
    };

};

export default ShowExpenditures;