import "../styles/App.scss";
import apiSeries from "../services/api.json";
import { useState } from "react";

function App() {
  const [seriesTvApi, setSeriesTvApi] = useState(apiSeries);

  const html = seriesTvApi.map((series, index) => {
    return (
      <li className="listApi" key={index}>
        <p>{series.quote}</p>
        <p>{series.character}</p>
      </li>
    );
  });
  return (
    <div className="App">
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
      <ul>{html}</ul>
      <div>
        <h2>Añadir una nueva frase</h2>
        <div>
          <label htmlFor="">Frase</label>
          <input type="text" id="searchphrase" name="searchphrase" />
        </div>
        <div>
          <label htmlFor="">Personaje</label>
          <input type="text" id="searcharacter" name="searcharacter" />
        </div>
        <input
          type="text"
          id="addnewphrase"
          name="addnewphrase"
          placeholder="Añadir una nueva frase"
        />
      </div>
    </div>
  );
}

export default App;
