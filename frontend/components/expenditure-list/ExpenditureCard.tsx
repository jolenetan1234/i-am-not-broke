import DeleteButton from "../interactive/DeleteButton";
import EditButton from "../interactive/EditButton";

const ExpenditureCard = ({ expt, handleDelete, handleEdit }) => {
  return (
    // wrapper div
    <div className="ExpenditureCard">

        <div className="flex flex-wrap">
            <div className="w-4/5 m-auto border-b border-coolGray-100">
                <div className="flex items-center justify-between py-4 -m-2">
                    {/* left chunk */}
                    <div className="w-auto p-2">
                        <div className="flex flex-wrap items-center -m-2">

                        {/* title + amount */}
                            <div className="w-auto p-2">
                                <h2 className="expt-card-title">{expt.title}</h2>
                                <h3 className="expt-card-detail">{+expt.amount > 0 ? (
                                    `+${expt.amount}`
                                ) : (
                                    `${expt.amount}`
                                )}</h3>
                            </div>
                        </div>
                    </div>

                    {/* right chunk (date) */}
                    <div className="w-auto p-2">
                        <p className="expt-card-detail">{expt.date}</p>

                        <div className="Buttons">
                            <div className="flex">
                                <EditButton 
                                handleEdit={handleEdit}
                                id={expt.id}
                                />
                                <DeleteButton 
                                handleDelete={handleDelete} 
                                id={expt.id} 
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