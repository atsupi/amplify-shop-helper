import { Button } from "@aws-amplify/ui-react";
import "./Detail.css";

function Detail() {
  const OnBack = () => {
    console.log("Back pressed");
  };
  return (
    <>
      <p>Detail</p>
      <Button onClick={OnBack}>Back</Button>
    </>
  );
}

export default Detail;
