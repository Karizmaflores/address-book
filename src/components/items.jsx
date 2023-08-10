import Item from "./item";
import {Items} from "./items.module.css"

function items(props) {
  return (
    <ul className={Items}>
    {props.items.map((item) => (
       <Item key={item.login.uuid} person={item}/>
    ))}
    </ul>
  )
}

export default items;