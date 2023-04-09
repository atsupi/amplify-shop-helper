import "./Cart.css";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPurchase } from "../graphql/mutations";
import { Button } from "@aws-amplify/ui-react";
import CartItem from "../components/CartItem";
import { getList } from "../Utils";

function Cart({ username }) {
  const [itemList, setItemList] = useState([]);
  let index = 0;

  useEffect(() => {
    let newItemList: Array<String> = [];
    getList().then((res) => {
      res.data.listItems.items.map((item) => {
        if (item.isInCart) {
          newItemList = [...newItemList, item.id];
        }
      });
      setItemList(newItemList);
    });
  }, []);

  const onSubmit = async () => {
    const date = new Date().toLocaleString();
    let IsPurchased: Array<number> = [];
    let itemIDs: Array<String> = [];
    itemList.map((item) => {
      console.log(item);
      itemIDs = [...itemIDs, item];
      IsPurchased = [...IsPurchased, 0];
    });
    let value = {
      id: date,
      itemID: itemIDs,
      username: username,
      numberOfItems: itemList.length,
      isPurchased: IsPurchased,
    };
    try {
      const res = await API.graphql(
        graphqlOperation(createPurchase, { input: value })
      );
    } catch (event) {
      console.log(event);
    }
  };

  return (
    <>
      <div className="Cart_div">
        <Button onClick={onSubmit}>Submit</Button>
        <div className="CartItemList">
          {itemList.map((item) => {
            index = index + 1;
            return (
              <div className="Item" key={`Item${index}`}>
                <CartItem itemID={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
