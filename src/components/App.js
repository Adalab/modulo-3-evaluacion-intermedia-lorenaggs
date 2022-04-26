import "../styles/App.scss";
import apiSeries from "../services/api.json";
import { useState } from "react";

function App() {
  const [seriesTvApi, setSeriesTvApi] = useState(apiSeries);
  const [newPhrase, setnewPhrase] = useState({
    quote: "",
    character: "",
  });
  const [search, setSearch] = useState("");
  // const [searchCharacter, setSearchCharacter] = useState(seriesTvApi.character);

  const html = seriesTvApi
    .filter((oneSerie) =>
      oneSerie.quote.toLowerCase().includes(search.toLowerCase())
    )
    // .filter((oneCharacter) => oneCharacter(searchCharacter))
    .map((series, index) => {
      return (
        <li className="listApi" key={index}>
          <p>{series.quote}</p>
          <p>{series.character}</p>
        </li>
      );
    });

  const htmlOptions = seriesTvApi.map((series, index) => {
    let searchFilter = [];
    // if (searchFilter.includes[i])
    return <option key={index}>{series.character}</option>;
  });

  const handleInputNewPhrase = (ev) => {
    setnewPhrase({ ...newPhrase, [ev.target.id]: ev.target.value });
  };

  const handleAddNewPhrase = (ev) => {
    ev.preventDefault();
    setSeriesTvApi([...seriesTvApi, newPhrase]);
    setnewPhrase({
      quote: "",
      character: "",
    });
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  // const handleClickFilter = (ev) => {
  //   setSearchCharacter(ev.currentTarget.id);
  // };

  return (
    <div className="App">
      <div>
        <div className="phraseFriends">
          <h1>Frases de Friends</h1>
          <div>
            <div>
              <label htmlFor=""> Filtrar por frase</label>
              <input
                type="search"
                autoComplete="off"
                name="searchphrase"
                value={search}
                onChange={handleSearch}
              />
            </div>
            <div>
              <label htmlFor="">Filtrar por personaje</label>
              <select name="" id="">
                {htmlOptions}
                <option
                  id="option1"
                  value="searchCharacter"
                  // onClick={handleClickFilter}
                >
                  Todos
                </option>
                {/* <option
                  id="option2"
                  value="searchCharacter"
                  onClick={handleClickFilter}
                >
                  Ross
                </option> */}
                {/* <option
                  id="option3"
                  value="searchCharacter"
                  onClick={handleClickFilter}
                >
                  Monica
                </option>
                <option
                  id="option4"
                  value="searchCharacter"
                  onClick={handleClickFilter}
                >
                  Joey
                </option>
                <option
                  id="option5"
                  value="searchCharacter"
                  onClick={handleClickFilter}
                >
                  Phoebe
                </option>
                <option
                  id="option6"
                  value="searchCharacter"
                  onClick={handleClickFilter}
                >
                  Chandlet
                </option>
                <option
                  id="option7"
                  value="searchCharacter"
                  onClick={handleClickFilter}
                >
                  Rachel
                </option> */}
              </select>
            </div>
          </div>
        </div>
      </div>
      <ul>{html}</ul>
      <form className="form">
        <h2>Añadir una nueva frase</h2>
        <div>
          <label htmlFor="">Frase</label>
          <input
            type="text"
            id="quote"
            name="quote"
            value={newPhrase.quote}
            onChange={handleInputNewPhrase}
          />
        </div>
        <div>
          <label htmlFor="">Personaje</label>
          <input
            type="text"
            id="character"
            name="character"
            value={newPhrase.character}
            onChange={handleInputNewPhrase}
          />
        </div>
        <input
          className="btnAdd"
          type="submit"
          value="Añadir una nueva frase"
          onClick={handleAddNewPhrase}
        />
      </form>
    </div>
  );
}

export default App;
