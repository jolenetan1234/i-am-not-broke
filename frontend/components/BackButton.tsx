import Link from "next/link";

const BackButton = ({ back = "/home" }) => {
  return (
    <div className="BackButton">
        {/* <div className="my-5"> */}
            <Link
            href={back}
            className="back-button"
            >
            Back
            </Link>
        {/* </div> */}
    </div>  
  );
};

export default BackButton;