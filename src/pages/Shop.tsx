import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listItems } from "../graphql/queries";
import PaginateItems from "../components/PaginateItems";

function Shop () {
  const [itemList, setItemList] = useState([]);

  const getList = async (nextToken = null) => {
    const res = await API.graphql(
      graphqlOperation(listItems, {
        nextToken: nextToken,
      })
    );
    return res;
  };

  useEffect(() => {
    getList().then((res) => {
      setItemList(res.data.listItems.items);
    });
  }, []);

  return (
    <>
      <div>
        <PaginateItems itemsPerPage={4} items={itemList} />
      </div>
    </>
  );
}

export default Shop;
