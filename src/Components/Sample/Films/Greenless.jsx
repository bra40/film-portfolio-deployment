import GoBack from "../Helpers/GoBack";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { React
  // , useState, useEffect 
} from "react";
// import ReactPlayer from "react-player";
import ResponsivePlayer from "../Helpers/ResponsivePlayer";
// import { // Link, Navigate, useNavigate, } from "react-router-dom";
// import Loader from "../../Loader/LoaderRing";

import imggy from "../../../Video/Thumbnail/theBox.png";
import giffy from "../../../Video/Gifs/theBox.gif";

import "./greenless.scss";
import "./filmInstance.scss";

export default function Greenless(props) {
  const Greenless = {
    key: 1,
    title: "Greenless",
    date: "05-22-2000",
    gif: giffy,
    img: imggy,
    workType: "Personal",
  };
  const num = String(Greenless.key).padStart(2, "0");
  const sideInfoAnim = {
    visible: {
      x: "0vh",
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1,
        mass: 0.005,
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.125,
      },
    },
    hidden: {
      x: "200vh",
      width: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        when: "afterChildren",
        staggerChildren: 0.125,
      },
    },
  };
  const childAnim = {
    visible: {
      opacity: 1,
      x: "0vh",
    },
    hidden: {
      opacity: 0,
      x: "10vh",
    },
  };

  const [open, openInfo] = useCycle(false, true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={sideInfoAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="FilmInstanceMotionContainer text-neutral-400">
              <h1 className="fs-title" onClick={openInfo}>
                {" "}
                ( CLOSE ){" "}
              </h1>
              <motion.div className="fs-title" variants={childAnim}>
                date / type
              </motion.div>
              <motion.div
                className="heading text-neutral-400"
                variants={childAnim}
              >
                Title
              </motion.div>
              <motion.div className="fs-title" variants={childAnim}>
                info
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* {spinner} */}
      <div className="FilmInstanceContainer bg-neutral-200">
        <div className="FilmInstanceTopNav">
          {/* <div
            className="title"
            onClick={() => {
              navigate("/#sample");
            }}
          >
            Back
          </div> */}
          <GoBack />
          <div className="title">NavBar</div>
        </div>
        <div className="FilmInstanceOpenAside" onClick={openInfo}>
          <div className="FilmInstanceId">
            <div className="title noPad">
              {num} / {Greenless.workType}
            </div>
            <div className="title noPad">{Greenless.title}</div>
          </div>
          <div className="FilmInstanceInfo">
            <div className="fs-sub-heading ff-body fw-bold text-primary-900 FilmInstanceInfoButton">
              information
            </div>
          </div>
        </div>
        {/* <ResponsivePlayer/> */}
        {/* <ReactPlayer
            className="filmInstance"
            width="100%"
            height="100%"
            controls={true}
            light={true}
            url="https://vimeo.com/600214381"
          /> */}
        {/* {instanceLoadSuccess === false ? <Loader /> : null} */}
        {/* <div className="FilmInstanceFilmPlayer"> */}
        {/* <div className="FilmInstanceFilmPlayerWrapper"> */}
        <ResponsivePlayer url={"https://vimeo.com/600214381"} />
        {/* </div> */}
        {/* </div> */}
        {/* <div className="FilmInstanceFilmPlayer">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://vimeo.com/600214381"
              className="react-player"
              playing={false}
              width="100%"
              height="100%"
              // light={true}
              controls={true}
              // onReady={setInstanceLoadSuccess(true)}
              onReady={successState}
            />
          </div>
        </div> */}
        <div className="FilmInstanceBotNav">
          <div className="title">Vimeo</div>
          <div className="title">About</div>
          <div className="title">Contact</div>
        </div>
      </div>
    </>
  );
}
/* <AnimatePresence>
        {open && (
          <motion.aside
          variants={sideInfoAnim}
          initial="hidden"
          animate="visible"
          exit="hidden"
          >
          <h1 onClick={openInfo}> ( CLOSE ) </h1>
          <motion.h4 variants={childAnim}>date / type</motion.h4>
          <motion.h1 variants={childAnim}>Title</motion.h1>
          <motion.h3 variants={childAnim}>info</motion.h3>
          </motion.aside>
          )}
          </AnimatePresence>
          <div className="filmSampleConainer">
          <div className="imgBlur"></div>
          <div className="divContainer">
          <div className="back">
          
          <GoBack />
          
          </div>
          <div className="about">About</div>
          <div onClick={openInfo} className="information">
          <h5>
          {" "}
          {num} / {Greenless.workType}{" "}
          </h5>
          <h2>{Greenless.title}</h2>
          <h3 className="infoAside"> information </h3>
          </div>
          
          <div className="film">
          <div className="filmCont">
          <div className="innerWrapperFilm">
          <ReactPlayer
          className="filmInstance"
          width="100%"
          height="100%"
          controls
          url="https://vimeo.com/600214381"
          />
          </div>
          </div>
          </div>
          
          <div className="vimeo">Vimeo</div>
          <div className="contact">Contact</div>
          </div>
          </div> */

// useEffect(() => {
//   console.log(instanceLoadSuccess);
//   // setLoadingInstance(true);
//   // setTimeout(() => {
//   //   setLoadingInstance(false);
//   // }, 6000);
// }, [instanceLoadSuccess]);

// let spinner = <></>;

// if (loadingInstance) {
//   spinner = (
//     <div className="AppLoader fs-heading">
//       <GridLoader
//         color={"var(--clr-neutral-accent-300)"}
//         loading={loadingInstance}
//         size={50}
//       />
//       Bruno Arnabar's Portfolio
//     </div>
//   );
// } else {
//   spinner = <></>;
// }
