export default function ActorCard(props) {

    const { actor } = props;

    return (
        <div className="actorCard" >
            <div className="actorImg">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div className="actorInfo">
              <h4>{actor.name}</h4>
              <div>{actor.birth_year} - {actor.death_year}</div>
              <div>{actor.nationality}</div>
              <div><span className="red">Famous for:</span> <br /> {actor.known_for}</div>
              <div><span className="red">Winner of</span> <br />{actor.awards}</div>
              <div><span className="red">Biography</span> <br />{actor.biography}</div>
            </div>
        </div>
    )
}