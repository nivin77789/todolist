import { React, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("nivin77789");
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      axios.get(`https://api.github.com/users/` + username).then((res) => {
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [username]);
  function handleSubmit() {
    setUsername(input);
    try {
      const link = `https://api.github.com/users/` + username;
      console.log(link);
      axios.get(link).then((res) => {
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <navbar>
        <div className="nav">
          <img
            alt="github"
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
          ></img>
          <h2>Github User Finder</h2>
        </div>
      </navbar>
      <center>
        <div className="top">
          <div className="inp">
            <img
              alt="s"
              src="https://github-user-search-app-kzaleskaa.netlify.app/static/media/icon-search.0cc0c984.svg"
            ></img>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Search Github username.."
            ></input>
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </center>
      <div className="App">
        <div className="sub">
          <div className="left">
            <img alt="github" src={user.avatar_url}></img>
            <center>
              {" "}
              <h1>{user.name}</h1>
            </center>
            <h3>@{user.login}</h3>
            <div className="sub-right">
              <table>
                <tr>
                  <th className="th1">Repos</th>
                  <th className="th2">Followers</th>
                  <th className="th3">Following</th>
                </tr>
                <tr>
                  <td className="td1">{user.public_repos}</td>
                  <td className="td2">{user.followers}</td>
                  <td className="td3">{user.following}</td>
                </tr>
              </table>
              <h2>
                Since : <span>{user.created_at}</span>
              </h2>
            </div>
          </div>
          <div className="right">
            <div className="sub-righ">
              <div className="img-d">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com?user=${user.login}&theme=github-dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`}
                  alt="q"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=github_dark&hide_border=true`}
                  alt="ew"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
