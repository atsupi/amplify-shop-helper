import { useEffect, useState } from "react";
import "./DetailItem.css";
import { getPresignedUrl } from "./Utils";
import { Checkbox } from "@mui/material";

function DetailItem({ item, onChange }) {
  const [presignedUrl, setPresignedUrl] = useState("");
  const [isChecked, setIsChecked] = useState(item.isPurchased);

  useEffect(() => {
    getPresignedUrl(item.imagefile).then((data) => {
      setPresignedUrl(data);
    });
  }, []);

  const onChangeCheckbox = (event) => {
    item.isPurchased = 1 - item.isPurchased;
    setIsChecked(item.isPurchased);
    onChange(event);
  };

  return (
    <>
      <p>DetailItem</p>
      <div className="DetailItem_wrapper" key={item.id}>
        <div className="checkbox">
          <Checkbox
            checked={isChecked ? true : false}
            color="success"
            onChange={onChangeCheckbox}
            inputProps={{ "aria-label": `${item.index}` }}
          />
        </div>
        <img src={presignedUrl} width="80" height="120" />
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </>
  );
}

export default DetailItem;
