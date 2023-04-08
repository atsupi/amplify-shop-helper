import { Link, Outlet, useParams } from "react-router-dom";
import "./Detail.css";
import DetailList from "../components/DetailList";

function Detail() {
  const param = useParams();
  const id = param.id;
  return (
    <div className="Detail_div">
      <DetailList pindex={id} />
      <div className="DetailLink">
        <Link to="/purchase">Back</Link>
      </div>
    </div>
  );
}

export default Detail;
