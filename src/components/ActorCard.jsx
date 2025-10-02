export default function ActorCard(props) {

    const { actor } = props;

    return (
        <div className="actorName" >
            <div className="actorImg">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div className="actorInfo">
                <p className="actorName">{actor.name}</p>
                <p className="actorDesc">
                    <span className={`status-icon is-${actor.status.toLowerCase()}`}></span>
                    {actor.status} - {actor.origin.name}
                </p>
            </div>
        </div>
    )
}