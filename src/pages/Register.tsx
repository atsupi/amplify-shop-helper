import "./Register.css";
import { Storage } from "aws-amplify";
import { useState } from "react";
import { Button } from "@aws-amplify/ui-react";

import { API, graphqlOperation } from "aws-amplify";
import { createItem } from "../graphql/mutations";
import { getPresignedUrl } from "../Utils";

function Register({username}) {
  const [presignedUrl, setPresignedUrl] = useState("");
  const [dataName, setDataName] = useState("No image");
  const [isUrlSet, setIsUrlSet] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const inputFile = (event: any) => {
    console.log(event.target.files[0]);
    if (event.target.files[0].size < 20000000) {
      console.log("Storage.put");
      console.log(event.target.files[0].name);
      console.log(event.target.files[0].type);
      Storage.put(event.target.files[0].name, event.target.files[0], {
        level: "public",
        progressCallback(progress) {
          let percentage = (100 * progress.loaded) / progress.total;
          console.log(`progress: ${percentage}%`);
        },
      })
        .then((result) => {
          console.log(`Completed the upload of ${result.key}`);
          console.log(event.target.files[0].name);
          getPresignedUrl(event.target.files[0].name)
            .then((result) => {
              setPresignedUrl(result);
              setDataName(event.target.files[0].name);
              setIsUrlSet(true);
            })
            .catch((event) => {
              console.log(event);
            });
        })
        .catch((event) => {
          console.log(event);
        });
    }
  };

  const inputDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const inputPrice = (event: any) => {
    setPrice(event.target.value);
  };

  const registerItem = async () => {
    console.log("Register item on DynamoDB");
    console.log(description + ` / ` + price + ` / ` + dataName);
    console.log(" username=" + username);
    const date = new Date().toLocaleString();
    console.log(" date=" + date);
    const value = {
      // `id` is not included as it is determined by AppSync
      id: date,
      imagefile: dataName,
      price: parseInt(price),
      username: username,
      description: description,
      isInCart: 0,
    };
    try {
      const res = await API.graphql(
        graphqlOperation(createItem, { input: value })
      );
      console.log(res);
    } catch (event) {
      console.log(event);
    }
  };

  const cancelRegistration = () => {
    console.log("Registration cancelled.");
  };

  return (
    <>
      <h2>Register Page</h2>
      <div className="Description">
        <label>Description:</label>
        <input
          type="text"
          value={description}
          placeholder="No description"
          onChange={inputDescription}
        />
      </div>
      <div className="Price">
        <label>Price (JPY):</label>
        <input
          type="text"
          value={price}
          placeholder="For free"
          onChange={inputPrice}
        />
      </div>
      <br />
      <div className="Uploader">
        <input type="file" onChange={inputFile} />
      </div>

      <div>
        {isUrlSet ? (
          <img src={presignedUrl} width="120" height="120" />
        ) : (
          `${dataName}`
        )}
      </div>
      <br />
      <div className="ControlButtons">
        <Button onClick={registerItem}>Submit</Button>
        <Button onClick={cancelRegistration}>Cancel</Button>
      </div>
    </>
  );
}

export default Register;
