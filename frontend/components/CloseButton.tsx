const CloseButton = ({ onClick }: { onClick: () => void; }) => {
  return (
    <div className="CloseButton">
    <div className="flex">
        <button className="input-label-style ml-auto"
        onClick={onClick}
        >
            ×
        </button>
    </div>
</div>
  );
};

export default CloseButton;