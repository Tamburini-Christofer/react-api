import { useState, useEffect } from "react";

export default function ActorList() {
    const [actorList, setActorList] = useState([]);

    function fetchActor() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
        .then((result) => setActorList(result.data.results))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchActor()
    } , [])

    return (
        <div>
                {actorList.map((actor) => {
                    <ActorCard
                        key={actor.id}
                        actor={actor}
                    />
                ))}
        </div>
    );
}