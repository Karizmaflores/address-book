import React, { useState } from "react";
import { item } from "./item.module.css";

function Item(props) {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <li className={item}>
    <img src={props.person.picture.thumbnail} />
    <h2>{props.person.name.first} {props.person.name.last}
    </h2>
    <p>Age: {props.person.dob.age}</p>
      <button onClick={() => setShowInfo(!showInfo)}>
        More
      </button>
      {showInfo && (
          <p>Location: {props.person.location.city}</p>
      )}
  </li>
  );
}

export default Item;