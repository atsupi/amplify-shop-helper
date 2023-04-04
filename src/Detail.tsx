import { Button } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const OnBack = () => {
    console.log("Back pressed");
    this.props.history.push
  };
  return (
    <>
      <p>Detail</p>
      <Link to="/purchase">Back</Link>
    </>
  );
}

export default Detail;
