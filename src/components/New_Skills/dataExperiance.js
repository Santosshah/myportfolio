import Html from "./icons/html.svg";
import Css from "./icons/css.svg";
import Sass from "./icons/sass.svg";
import Bootsrap from "./icons/bootstrap.svg";
import Js from "./icons/js2.svg";
import React from "./icons/react.svg";
import Cp from "./icons/c++.svg";
import C from "./icons/c.svg";
import Py from "./icons/python.svg";
import R from "./icons/r.svg";
import Golang from "./icons/golang.svg";
import Java from "./icons/java.svg";
import Sql from "./icons/sql.svg";
import Node from "./icons/node.svg";
import Mdb from "./icons/monogo.svg";
import Aws from "./icons/aws.svg";
import Firebase from "./icons/firebase.svg";
import Ccna from "./icons/ccna.svg";

export const btnData = [
  {
    id: "frontend",
    title: "front-end",
  },
  {
    id: "backend",
    title: "back-end",
  },
  {
    id: "server",
    title: "server-side",
 
  },
  {
    id: "network",
    title: "Networking",
  },
];

export const Frontend = [
  {
    id: 1,
    img: [Html, Css, Sass, Bootsrap, Js, React],
    title: "Frontend Skills",
    dates: "2018",
    skills: ["html", "css", "sass", "bootstrap", "javascript", "react"],
  },
];

export const Backend = [
  {
    id: 2,
    img: [C, Cp, Py, R, Golang, Java],
    title: "Backend SKills",
    dates: "2020",
    skills: ["C/C++", "Python", "R", "Golang", "Java"],
  },
];

export const Server = [
  {
    id: 3,
    img: [Sql, Node, Mdb, Aws, Firebase],
    title: "Server SKills",
    dates: "2021",
    skills: ["sql/mysql", "node/mongoDb", "aws", "firebase"],
  },
];

export const Networking = [
  {
    id: 4,
    img: [Ccna],
    title: "Networking SKills",
    dates: "2022",
    skills: ["CCNA(200-301)"],
  },
];
