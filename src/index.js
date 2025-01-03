import ReactDom from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import FilmComponent from "./Components/Sample/Films/FilmComponent/FilmComponent";

// import Nav from "./Components/Nav/Nav"

//goToContext
import { BackToSampleProvider } from "./Contexts/BackToSample";
import { GoToAboutContextProvider } from "./Contexts/GoToAboutContext";
import { GoToContactContextProvider } from "./Contexts/GoToContactContext";
import { AboutClickerProvider } from "./Contexts/AboutClickerContext";
import { ContactClickerProvider } from "./Contexts/ContactClickerContext";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <AboutClickerProvider>
    <ContactClickerProvider>
      <GoToContactContextProvider>
        <GoToAboutContextProvider>
          <BackToSampleProvider>
            <BrowserRouter>
              {/* <Nav/> */}
              <Routes>
                <Route path="/" element={<App />} />

                <Route path="/films/:filmUrl" element={<FilmComponent />} />

                <Route
                  path="*"
                  element={
                    <div
                      style={{
                        backgroundColor: "var(--clr-primary-900)",
                        height: "100vh",
                      }}
                    >
                      <p>
                        There's nothing here :/ New sections are coming though!
                        :) Check out what I've currently got at brunoarnabar.com
                      </p>
                    </div>
                  }
                />
              </Routes>
            </BrowserRouter>
          </BackToSampleProvider>
        </GoToAboutContextProvider>
      </GoToContactContextProvider>
    </ContactClickerProvider>
  </AboutClickerProvider>
);
