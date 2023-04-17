import "./Cart.css";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPurchase } from "../graphql/mutations";
import { Button } from "@aws-amplify/ui-react";
import CartItem from "../components/CartItem";
import { updateItemStatus, fetchItem, getList } from "../Utils";
import { Item } from "../types";

type Props = {
  username: string | undefined;
};

type ListProps = {
  id: string;
  index: number;
};

function Cart(props: Props) {
  const [itemList, setItemList] = useState(Array<ListProps>);

  useEffect(() => {
    let index = 0;
    let newItemList: Array<ListProps> = [];
    getList().then((res: { data: { listItems: { items: Item[] } } }) => {
      res.data.listItems.items.map((item: Item) => {
        if (item.isInCart) {
          newItemList = [...newItemList, { id: item.id, index: index }];
          index = index + 1;
        }
      });
      setItemList(newItemList);
    });
  }, []);

  const onSubmit = async () => {
    const date = new Date().toLocaleString();
    let IsPurchased: Array<number> = [];
    let itemIDs: Array<string> = [];
    itemList.map((item) => {
      console.log(item);
      itemIDs = [...itemIDs, item.id];
      IsPurchased = [...IsPurchased, 0];
    });
    const value = {
      id: date,
      itemID: itemIDs,
      username: props.username,
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

  const onDeleteChild = (id: string) => {
    let newItemList: Array<ListProps> = [];
    itemList.map((item) => {
      if (item.id !== id) {
        newItemList = [...newItemList, item];
      }
    });
    setItemList(newItemList);
    fetchItem(id).then((res) => {
      const curItem = res.data.getItem;
      const newItem: Item = {
        id: curItem.id,
        imagefile: curItem.imagefile,
        price: curItem.price,
        username: curItem.username,
        description: curItem.description,
        isInCart: 0,
      };
      updateItemStatus(newItem);
    });
  };

  return (
    <>
      <div className="Cart_div">
        <Button onClick={onSubmit} disabled={itemList.length < 1}>
          Submit
        </Button>
        <div className="CartItemList">
          {itemList.map((item) => {
            return (
              <div className="Item" key={`Item${item.index}`}>
                <CartItem itemID={item.id} onDelete={onDeleteChild} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
