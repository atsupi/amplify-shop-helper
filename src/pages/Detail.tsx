import { Link, Outlet, useParams } from "react-router-dom";
import "./Detail.css";
import DetailList from "../components/DetailList";
import { useEffect, useState } from "react";

function Detail() {
  const [id, setId] = useState<string | undefined>("");
  const param = useParams();
  useEffect(() => {
     setId(param.id);
  },[]);

  return (
    <div className="Detail_div">
      <DetailList pindex={id? parseInt(id): 1} />
      <div className="DetailLink">
        <Link to="/purchase">Back</Link>
      </div>
    </div>
  );
}

export default Detail;
