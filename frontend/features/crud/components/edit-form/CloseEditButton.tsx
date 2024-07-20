const CloseEditButton = ({ handleClose }) => {
  return (
    <div className="CloseEditButton">
        <div className="flex">
            <button className="input-label-style ml-auto"
            onClick={handleClose}
            >
                ×
            </button>
        </div>
    </div>
  )
}

export default CloseEditButton