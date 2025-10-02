//todo Importo lo stato e l'effetto
import { useState, useEffect } from "react";
//todo Importo il componente ActorCard
import ActorCard from "./ActorCard";
//todo Importo il componente ActressCard
import ActressCard from "./ActressCard";

export default function MyMain() {
//todo Creo due variabili che registrino lo stato attuale, sia attore che attrice
  const [actorList, setActorList] = useState([]);
  const [actressList, setActressList] = useState([]);

  function fetchActor() {
    //todo Chiamo l'API con il fetch per evitare il problema del non trovare l'axios  
       fetch("https://lanciweb.github.io/demo/api/actors")
      .then((res) => res.json()) 
      .then(data => {
        console.log(data);
        return data;})
      .then(data => setActorList(data))
      .catch(error => console.log(error));
}
  function fetchActress() {
       fetch("https://lanciweb.github.io/demo/api/actresses")
      .then((result) => result.json()) 
      .then(data => {
        console.log(data);
        return data;})
      .then(data => setActressList(data))
      .catch(error => console.log(error));
}

  useEffect(() => {
    fetchActor();
    fetchActress();
  }, []);

  return (
    <div className="containerCard">
      {actorList?.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
      {actressList?.map((actress) => (
        <ActressCard key={actress.id} actress={actress} />
      ))}
    </div>
  );
}