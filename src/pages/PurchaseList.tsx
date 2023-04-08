import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPurchases } from "./graphql/queries";
import PurchaseItem from "./PurchaseItem";
import "./PurchaseList.css";

function PurchaseList() {
  let index = 0;
  const [purchaseLists, setPurchaseLists] = useState([]);

  const getList = async (nextToken = null) => {
    const res = await API.graphql(
      graphqlOperation(listPurchases, {
        nextToken: nextToken,
      })
    );
    return res;
  };

  useEffect(() => {
    getList().then((res) => {
      setPurchaseLists(res.data.listPurchases.items);
    });
  }, []);

  return (
    <>
      <h3>Purchase List</h3>
      <div className="PurchaseList_div">
        {purchaseLists.map((item) => {
          index = index + 1;
          return (
            <div className={`Item${index}`} key={`detail/${index}`}>
              <Link to={`/detail/${index}`} key={`linkToDetail/${index}`}>
                <PurchaseItem data={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PurchaseList;
