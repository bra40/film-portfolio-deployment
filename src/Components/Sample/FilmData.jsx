import GreenlessGif from "../../Video/Gifs/Greenless.gif";
import GreenlessImg from "../../Video/Thumbnail/Greenless.png";

import theBoxGif from "../../Video/Gifs/theBox.gif";
import theBoxImg from "../../Video/Thumbnail/theBox.png";

import BirdsEyeViewGif from "../../Video/Gifs/BirdsEyeView.gif";
import BirdsEyeViewImg from "../../Video/Thumbnail/BirdsEyeView.png";

import PhenomenaGif from "../../Video/Gifs/Phenomena.gif";
import PhenomenaImg from "../../Video/Thumbnail/Phenomena.png";

import FilmNetGif from "../../Video/Gifs/FilmNet.gif";
import FilmNetImg from "../../Video/Thumbnail/FilmNet.png";

import ThisPortfolioGif from "../../Video/Gifs/ThisPortfolio.gif";
import ThisPortfolioImg from "../../Video/Thumbnail/ThisPortfolio.png";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = mm + "-" + dd + "-" + yyyy;

export const GreenlessInfo = {
  key: 5,
  title: "Scenes From Greenless",
  date: "06-22-2021",
  vidUrl: "https://vimeo.com/600195237",
  workType: "Personal",
  info: "Shots from a feature film that was never finished due to complications. The script was feature length, and the experience on set the days we shoot has been invaluable",
  skinny: true,
  gif: GreenlessGif,
  img: GreenlessImg,
  url: "Greenless",
};

export const TheBoxInfo = {
  key: 1,
  title: "The Box",
  date: "11-25-2019",
  vidUrl: "https://vimeo.com/600214381",
  workType: "University Project",
  info: "A man finds a box, taking him out from his mundane existence. Animated by hand and through lazer cutouts. Directed the collaboration with peers in a Studio Animation course at the University Of Pittsburgh",
  skinny: false,
  gif: theBoxGif,
  img: theBoxImg,
  url: "TheBox",
};

export const BirdsEyeViewInfo = {
  key: 2,
  title: "Birds Eye View",
  date: "01-27-2020",
  vidUrl: "https://vimeo.com/750443103",
  workType: "Personal",
  info: "Under the metallic rhythm of Tame Impala's 'Powerlines' and the synthetic ambiance of London streets, the intention of camera and those looking through them are examined -- while those in front of the lens either neglect, avoid, or embrace the filmic gaze",
  skinny: false,
  gif: BirdsEyeViewGif,
  img: BirdsEyeViewImg,
  url: "BirdsEyeView",
};

export const PhenomenaInfo = {
  key: 3,
  title: "Phenomena",
  date: "05-31-2020",
  vidUrl: "https://youtu.be/uVNm_LsNVBw",
  workType: "Personal",
  info: "A meditation on film, language, and human nature. Graphic design by Daniel Arnabar",
  skinny: false,
  gif: PhenomenaGif,
  img: PhenomenaImg,
  url: "Phenomena",
};

export const FilmNetInfo = {
  key: 4,
  title: "FilmNet",
  date: "04-27-2022",
  vidUrl: "https://youtu.be/d5ZHovQE2lA",
  workType: "CompSci Capstone",
  info: "A webapp focused on creating a film society. Built with React and Flask. I worked on networking the graphs on the front-end, managing the film states, concepts, and general user interface",
  skinny: false,
  gif: FilmNetGif,
  img: FilmNetImg,
  url: "FilmNet",
};

export const ThisPortfolioInfo = {
  key: 5,
  title: "This Portfolio",
  date: today,
  vidUrl: "https://youtu.be/ELhRPzP8GW4",
  workType: "Personal",
  info: "A self reference as to how I hand coded this website using React and CSS rather than using Wix, Webpress, Squarespace, or other web-building software. Here, I use a javascript intersection observer to translate the opacity of the cards based on their position",
  skinny: false,
  gif: ThisPortfolioGif,
  img: ThisPortfolioImg,
  url: "ThisPortfolio",
};