import "./App.css";
import { useState } from "react";
import axios from "axios";

const messages = {
  title: "League of Legends Player Searcher",
  playName: "Player Name: ",
  sumLevel: "Summoner Level: ",
  noPlayData: "No Player Data",
  search: "Search",
};

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-336c669a-0b4f-4330-87a6-35b4d7d638fa";

  function searchForPlayer(event) {
    //Setup the correct apiCall from BR server
    var APICallString = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${API_KEY}`;
    //handle de apiCall
    axios
      .get(APICallString)
      .then(function (response) {
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(playerData);
  return (
    <div className="App">
      <div className="App-header">
        <h5>{messages.title}</h5>
      </div>

      <div className="App-search-box">
        <input
          type="text"
          className="App-search-box-text"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <div>
          <button
            className="App-search-box-button"
            onClick={(e) => searchForPlayer(e)}
          >
            {messages.search}
          </button>
        </div>
      </div>
      {JSON.stringify(playerData) !== "{}" ? (
        <>
          {" "}
          {messages.playName}
          <p>{playerData.name}</p>
          <div>
            <img
              className="App-Profile-Icon"
              src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${playerData.profileIconId}.png`}
              alt="Profile Icon"
            />
          </div>
          <div></div>
          <p>
            {messages.sumLevel} {playerData.summonerLevel}
          </p>
        </>
      ) : (
        <p>{messages.noPlayData}</p>
      )}
    </div>
  );
}

export default App;
