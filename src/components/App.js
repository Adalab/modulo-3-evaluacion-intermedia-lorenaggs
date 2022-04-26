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

  const html = seriesTvApi
    .filter((oneSerie) =>
      oneSerie.quote.toLowerCase().includes(search.toLowerCase())
    )
    .map((series, index) => {
      return (
        <li className="listApi" key={index}>
          <p>{series.quote}</p>
          <p>{series.character}</p>
        </li>
      );
    });
  const htmlOptions = seriesTvApi.map((series, index) => {
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
              <input
                type="text"
                id="allsearch"
                name="allsearch"
                placeholder="Filtrar por personaje"
              />
              <select name="" id="">
                {htmlOptions}
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
