import { Link, Outlet, useParams } from "react-router-dom";
import "./Detail.css";
import DetailList from "./DetailList";

function Detail() {
    const param = useParams();
    const id = param.id;
  const OnBack = () => {
    console.log("Back pressed");
    this.props.history.push
  };
  return (
    <>
      <p>Detail {id}</p>
      <DetailList pindex={id}/>
      <Link to="/purchase">Back</Link>
    </>
  );
}

export default Detail;
