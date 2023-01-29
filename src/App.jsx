import "./App.css";
import { useState, useContext } from "react";
import Plx from "react-plx";
import Mint from './components/mint/Mint';
import NavBar from './components/navbar/NavBar';
import { Hide } from '@chakra-ui/react';
import { themeContext } from "./Context"

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [accounts, setAccounts] = useState([])

  return (
    <div
      className="App"
      style={{
        color: darkMode ? "var(--color-bg)" : "",
      }}
    > 
      <Hide breakpoint='(max-width: 1524px)'>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 40,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 33,
                  property: "scale"
                }
              ]
            }
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 10
          }}
        >
          <img style={{ width: "100%" }} src={require("./assets/background/mist-kitt.png")} alt="foreground" />
        </Plx>
      </Hide>
      <Plx className="logo"
        parallaxData={[
          {
            start: 0,
            end: 60,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "12vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "45vw"
          }}
          src={require("./assets/background/standard-kitt.png")}
          alt="standard"
        />
      </Plx>
      <Plx className="logo"
        parallaxData={[
          {
            start: 0,
            end: 80,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          },
          {
            start: 40,
            end: 79,
            properties: [
              {
                startValue: 1,
                endValue: 2,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "12vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "45vw"
          }}
          src={require("./assets/background/made-kitt-scroll.png")}
          alt="made"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 20,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 80,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity"
                }
              ]
            }
          ]}
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "fixed",
            zIndex: 0
          }}
        >
        <div>
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <Mint accounts={accounts} setAccounts={setAccounts} />
        </div>
      </Plx>
      </div>
    </div>
  );
}

export default App;
