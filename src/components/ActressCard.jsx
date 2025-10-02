export default function ActressCard(props) {

    const { actress } = props;

    return (
        <div className="actorCard" >
            <div className="actorImg">
                <img src={actress.image} alt={actress.name} />
            </div>
            <div className="actorInfo">
              <h4>{actress.name}</h4>
              <div>{actress.birth_year} - {actress.death_year}</div>
              <div>{actress.nationality}</div>
              <div><span className="red">Famous for:</span> <br /> {actress.known_for}</div>
              <div><span className="red">Winner of</span> <br />{actress.awards}</div>
              <div><span className="red">Biography</span> <br />{actress.biography}</div>
            </div>
        </div>
    )
}