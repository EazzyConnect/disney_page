import { useState } from 'react';
import AppCSS from './App.module.css';
import { Disney } from './components/Disney';

const App = () => {

  const [tab, setTab] = useState("Disney");

  const toggleTab = (switchTab) => {
    setTab(switchTab)
  };

  return (
    <>

      <div id={AppCSS.navBar}>

        <div id={AppCSS.navBar1}>
          <button id={AppCSS.disneyBtn} onClick={() => toggleTab("Disney")}>Disney</button>
        </div>

        <div id={AppCSS.navBar2}>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("DisPlus")}>Disney Plus</button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Shopping")}>Shopping</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Movie")}>Movie</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("TV")}>TV</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Parks")}>Parks & Resorts</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Music")}>Music</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Events")}>Live & Events </button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Game")}>Game</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("Kids")}>Kids</button>
            <button id={AppCSS.navBtnArr}><i className="fa-solid fa-chevron-down"></i></button>
          </div>

          <div className={AppCSS.dropDown}>
            <button id={AppCSS.navBtn} onClick={() => toggleTab("CommonInfo")}>Common Information</button>
          </div>


          <div id={AppCSS.navSearch}>
            <input id={AppCSS.navInput} type="text" placeholder='Search within the site' />
            <button id={AppCSS.navInputBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

        </div>

      </div>

      {
        tab === "Disney" && (
          <div>
            <Disney />
          </div>
        )
      }
      {
        tab === "DisPlus" && (
          <div>
            <h1>DisPlus page</h1>
          </div>
        )
      }
      {
        tab === "Shopping" && (
          <div>
            <h1>Shopping page</h1>
          </div>
        )
      }
      {
        tab === "Movie" && (
          <div>
            <h1>Movie page</h1>
          </div>
        )
      }
      {
        tab === "TV" && (
          <div>
            <h1>TV page</h1>
          </div>
        )
      }
      {
        tab === "Parks" && (
          <div>
            <h1>Parks page</h1>
          </div>
        )
      }
      {
        tab === "Music" && (
          <div>
            <h1>Music page</h1>
          </div>
        )
      }
      {
        tab === "Events" && (
          <div>
            <h1>Events page</h1>
          </div>
        )
      }
      {
        tab === "Game" && (
          <div>
            <h1>Game page</h1>
          </div>
        )
      }
      {
        tab === "Kids" && (
          <div>
            <h1>Kids page</h1>
          </div>
        )
      }
      {
        tab === "CommonInfo" && (
          <div>
            <h1>Common Info page</h1>
          </div>
        )
      }
    </>
  )
};


export default App;
