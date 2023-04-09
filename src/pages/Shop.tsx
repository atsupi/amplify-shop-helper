import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listItems } from "../graphql/queries";
import PaginateItems from "../components/PaginateItems";
import { Button } from "@aws-amplify/ui-react";
import { Item } from "../API";
import "./Shop.css";
import { Link } from "react-router-dom";

function Shop() {
  const [itemList, setItemList] = useState(Array<Item>);
  const [numberOfItems, setNumberOfItems] = useState(0);

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
      const items: Array<Item> = res.data.listItems.items;
      setItemList(items);
      items.map((item) => {
        if (item.isInCart) {
          setNumberOfItems((number) => number + 1);
        }
      });
    });
  }, []);

  const OpenCart = () => {
    console.log("OpenCart clicked");
  };

  return (
    <>
      <div className="Shop_Wrapper">
        <div className="CartButton">
          <Link to="/cart">
            <Button onClick={OpenCart}>To Cart ({numberOfItems})</Button>
          </Link>{" "}
        </div>
        <div className="ShopItemList">
          <PaginateItems itemsPerPage={4} items={itemList} />
        </div>
      </div>
    </>
  );
}

export default Shop;
