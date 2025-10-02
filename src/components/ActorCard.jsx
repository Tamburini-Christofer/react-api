export default function ActorCard(props) {

    const { actor } = props;

    return (
        <div className="actorCard" >
            <div className="actorImg">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div className="actorInfo">
              <h3>{actor.name}</h3>
              <div>{actor.birth_year} - {actor.death_year}</div>
              <div>{actor.nationality}</div>
              <div>`Famous for: {actor.known_for}`</div>
              <div>`Winner of {actor.awards}`</div>
            </div>
        </div>
    )
}