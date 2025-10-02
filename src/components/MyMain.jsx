import { useState, useEffect } from "react";
import ActorCard from "./ActorCard";

export default function MyMain() {
  const [actorList, setActorList] = useState([]);

  function fetchActor() {
       fetch("https://lanciweb.github.io/demo/api/actors")
      .then((res) => res.json()) 
      .then(data => console.log(data))
      .then((data) => setActorList(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchActor();
  }, []);

  return (
    <div className="containerCard">
      {actorList?.map((actor) => (
        <ActorCard 
        key={actor.id} 
        actor={actor.name} />
      ))}
    </div>
  );
}
