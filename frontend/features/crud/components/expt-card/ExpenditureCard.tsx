import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { Expenditure } from "../../types/expenditure";

const ExpenditureCard = ({ expt, handleDelete, handleEdit }: { expt: Expenditure, handleDelete: (exptId: string) => void, handleEdit: (exptId: string) => void }) => {
  return (
    // wrapper div
    <div className="ExpenditureCard">

        <div className="flex flex-wrap">
            <div className="m-auto border-b border-gray-500">
                <div className="flex items-center justify-between py-4 -m-2">
                    {/* left chunk */}
                    <div className="w-auto p-2">
                        <div className="flex flex-wrap items-center -m-2">

                        {/* title + amount */}
                            <div className="w-auto p-2">
                                
                                <h2 className="expt-card-title">
                                    {expt.title}
                                </h2>

                                <h3 className="expt-card-detail">
                                    {+expt.amount > 0 ? (
                                    `+${expt.amount}`
                                    ) : (
                                    `${expt.amount}`
                                    )}
                                </h3>
                            </div>

                            <div className="expt-card-detail">
                                {expt.category}
                            </div>

                        </div>
                    </div>

                    {/* right chunk (date) */}
                    <div className="w-auto p-2 flex flex-col items-center">
                    
                        <div className="expt-card-detail">{expt.date}</div>

                        <div className="Buttons">
                            <div className="flex">
                                <EditButton 
                                handleEdit={handleEdit}
                                exptId={expt.id}
                                />
                                <DeleteButton 
                                handleDelete={handleDelete} 
                                exptId={expt.id} 
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ExpenditureCard;