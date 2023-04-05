import "./Cart.css";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listItems } from "./graphql/queries";
import { createPurchase } from "./graphql/mutations";
import { Button } from "@aws-amplify/ui-react";
import CartItem from "./CartItem";

type Item = {
  id: String;
  imagefile: String;
  price: number;
  username: String;
  description: String;
  isInCart: number;
};

type Purchase = {
  id: String;
  itemID: [String];
  username: String;
  numberOfItems: number;
  isPurchased: [number];
};

function Cart({ username }) {
  const [itemList, setItemList] = useState([]);
  let index = 0;

  const getList = async (nextToken = null) => {
    const res = await API.graphql(
      graphqlOperation(listItems, {
        nextToken: nextToken,
      })
    );
    return res;
  };

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
    console.log(value);
    try {
      const res = await API.graphql(
        graphqlOperation(createPurchase, { input: value })
      );
      console.log(res);
    } catch (event) {
      console.log(event);
    }
  };

  return (
    <>
      <Button onClick={onSubmit}>Submit</Button>
      <h1>Cart Page</h1>
      <div className="itemList">
        {itemList.map((item) => {
          index = index + 1;
          return (
            <div className="Item" key={`Item${index}`}>
              <CartItem item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
