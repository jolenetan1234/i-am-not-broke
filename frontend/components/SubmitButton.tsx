const SubmitButton = ({ text }: { text:string }) => {
  return (
    <div className="SubmitButton">
    <div className="flex justify-center">
        <button 
        type="submit"
        className="submit-button mb-2"
        >
          {text}
        </button>
    </div>
</div>
  )
}

export default SubmitButton