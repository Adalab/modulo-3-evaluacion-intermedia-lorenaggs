import "../styles/App.scss";
import apiSeries from "../services/api.json";
import { useState, useEffect } from "react";
import callToApi from "../services/ApiData";

function App() {
  const [seriesTvApi, setSeriesTvApi] = useState(apiSeries);
  const [newPhrase, setnewPhrase] = useState({
    quote: "",
    character: "",
  });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([callToApi]);
  // const [searchCharacter, setSearchCharacter] = useState(seriesTvApi.character);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  console.log(setData);
  const html = seriesTvApi
    // .filter(())
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

  // comprobación de llamada a APi con fetch
  const html2 = data.map((data, index) => {
    return (
      <li className="listApi" key={index}>
        <p>{data.quote}</p>
        <p>{data.character}</p>
      </li>
    );
  });

  // const htmlOptions = seriesTvApi.map((series, index) => {
  //   let searchFilter = [];
  //   // if (searchFilter.includes[i])
  //   return <option key={index}>{series.character}</option>;
  // });

  const htmlOptions = seriesTvApi
    .reduce((characters, actual) => {
      const validate = !characters.includes(actual.character);
      if (validate) {
        characters.push(actual.character);
      }
      return characters;
    }, [])
    .map((character, index) => {
      return <option key={index}>{character}</option>;
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
      {html2}
      <div className="phraseFriends">
        <header>
          <h1>Frases de Friends</h1>
        </header>

        <form action="">
          <label htmlFor=""> Filtrar por frase</label>
          <input
            type="search"
            autoComplete="off"
            name="searchphrase"
            value={search}
            onChange={handleSearch}
          />
          <label htmlFor="">Filtrar por personaje</label>
          <select name="" id="">
            <option
              id="option1"
              value="searchCharacter"
              // onClick={handleClickFilter}
            >
              Todos
            </option>
            {htmlOptions}
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
        </form>
      </div>
      <ul>{html}</ul>
      {/* <form className="form"> */}
      <h2>Añadir una nueva frase</h2>
      <form action="">
        <label htmlFor="">Frase</label>
        <input
          type="text"
          id="quote"
          name="quote"
          value={newPhrase.quote}
          onChange={handleInputNewPhrase}
        />
        <label htmlFor="">Personaje</label>
        <input
          type="text"
          id="character"
          name="character"
          value={newPhrase.character}
          onChange={handleInputNewPhrase}
        />
      </form>
      <input
        className="btnAdd"
        type="submit"
        value="Añadir una nueva frase"
        onClick={handleAddNewPhrase}
      ></input>
    </div>
  );
}

export default App;
