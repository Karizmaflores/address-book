import { useState, useEffect } from "react";
import Items from "./components/items";
import './App.css';


function App() {
  const [people, setPeople] = useState([]);


  //componentDidMount
  useEffect(() => {
 fetch("https://randomuser.me/api?results=25")
 .then((res) => res.json())
 .then((data) => setPeople(data.results));
  }, []);

  // useEffect(() => {
  //   console.log(people);
  // }, [people]);

  return (
    <>
      <Items items={people}/>
    </>
  )
}

export default App;
