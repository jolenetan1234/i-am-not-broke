const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="ErrorMessage">
        <div className="text mb-2">
            {errorMessage}
        </div>
    </div>
  )
}

export default ErrorMessage;