import "./skill.scss";
import Roulette from "./Roulette/Roulette";
import Card from "./Card/Card";

import React, { useState } from "react";

const infoCompSci = [
  {steps:"1. Understand the task:", ex1:"Brainstorm a solution towards objective", ex2:"Draw diagrams to visualize concept", ex3:"Create pseudo-code, articulating steps needed", id:1},
  {steps:"2. Break solution into steps:", ex1:"Implement one part at a time", ex2:"Refactor the code as needed", ex3:"Write documentation about the code", id:2},
  {steps:"3. Look at the big picture:", ex1:"Observing how code aids objective", ex2:"Thinking of the approach taken", ex3:"Considering how to improve code", id:3},
  {steps:"4. Seek feedback often:", ex1:"Via unit tests and debugging", ex2:"By participating in code reviews", ex3:"From asking coworkers and mentors", id:4},
  {steps:"5. Check correctness and efficiency:", ex1:"Optimize the code for performance", ex2:"Conduct tests frequently and debug", ex3:"Push often, only when ready", id:5}
]

const infoFilm = [
  {steps:"1. Find a meaningful idea:", ex1:"Bring characters and plot to life", ex2:"Break story into narrative beats", ex3:"Build screenplay through specific scenes", id:1},
  {steps:"2. Organize the production:", ex1:"Network the cast/crew team", ex2:"Prepare, plan, and execute schedule", ex3:"Manage the locations and resources", id:2},
  {steps:"3. Shoot the film:", ex1:"Direct authentic performances with atmosphere", ex2:"Collaborate to frame/capture footage", ex3:"Troubleshoot towards solutions on set", id:3},
  {steps:"4. Edit raw materials:", ex1:"Montage to communicate original idea", ex2:"Execute any additional pick-up shots", ex3:"Refine final touches and audio", id:4},
  {steps:"5. Finish and release:", ex1:"Add visual effects and color-grade", ex2:"Create titles, thumbnails, and posters", ex3:"Release and market final product", id:5}
]

const dataCompSci = [
  {compSciIcon:true, title:"Developer", oneOne:"Java", oneTwo:"SQL", oneThree:"React/JS", twoOne:"C", twoTwo:"Python", twoThree:"Git", id:1}
]

const dataFilm = [
  {compSciIcon:false, title:"Filmmaker", oneOne:"StudioBinder", oneTwo:"Storyboarder", oneThree:"DaVinci Resolve", twoOne:"Adobe", twoTwo:"RunwayML", twoThree:"Blender", id:1}
]

export default function SkillTest() {

    const [isClicked, setIsClicked] = useState(false)

    let contentRoulette=  <Roulette info={infoCompSci}/>;
    let contentCard= <Card qual={dataCompSci}/>;

    function myFunction() {
        setIsClicked(isClicked => !isClicked);
    }

    if (isClicked) { 
        contentRoulette =  <Roulette info={infoCompSci}/>;
        contentCard = <Card qual={dataCompSci}/>;
    } else {      
        contentRoulette =  <Roulette info={infoFilm}/>;
        contentCard = <Card qual={dataFilm}/>;    
    }
    

  return (
    <div className="grid-container">
      <div className="grid-comp">
        <div className="card-roulette">
          {contentRoulette}
        </div>
        <div className="card-skill">
            {contentCard}
        </div>
        <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
      </div>
    </div>
  );
}