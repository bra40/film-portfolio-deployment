import FilmInstance from "../FilmInstance/FilmInstance";
import React from "react";
import { BirdsEyeViewInfo } from "../../FilmData";

export default function TheBox() {
  return <FilmInstance filmInfo={BirdsEyeViewInfo} />;
}