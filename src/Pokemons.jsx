
export const Pokemons = ({ pokemon }) => {

    return (

        <>

            <p>N° <span>{pokemon.id}</span></p>

            <img className={pokemon.types[0].type.name} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />

            <h3>{pokemon.name}</h3>

            <div className="info">

                <p>height: <span>{pokemon.height}</span></p>
                <p>weight: <span>{pokemon.weight}</span></p>

            </div>

            <div className="tipos">

                <p className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p>
                {pokemon.types[1] && <p className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</p>}

            </div>

            {pokemon.stats.map((stat, index) => (
        
                <div className="stats" key={index}>

                    <p>{stat.stat.name}: <span>{stat.base_stat}</span></p>

                </div>

            ))}

        </>

    )
}
