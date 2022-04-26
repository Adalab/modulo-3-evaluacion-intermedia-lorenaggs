import "../styles/App.scss";
import apiSeries from "../services/api.json";
import { useState } from "react";

function App() {
  const [seriesTvApi, setSeriesTvApi] = useState(apiSeries);
  const [newPhrase, setnewPhrase] = useState({
    quote: "",
    character: "",
  });
  const [filter, setFilter] = useState("");

  const html = seriesTvApi.map((series, index) => {
    return (
      <li className="listApi" key={index}>
        <p>{series.quote}</p>
        <p>{series.character}</p>
      </li>
    );
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

  return (
    <div className="App">
      <div>
        <div className="phraseFriends">
          <h1>Frases de Friends</h1>
          <div>
            <input
              type="text"
              id="filterphrase"
              name="filterphrase"
              placeholder="Filtrar por frase"
            />
            <input
              type="text"
              id="allfilter"
              name="allfilter"
              placeholder="Filtrar por personaje"
            />
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
