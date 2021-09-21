import streamflow from "../Assets/images/streamflow.png";
import subTracker from "../Assets/images/subtracker.PNG";
import empDir from "../Assets/images/employee-dir.png";
import weather from "../Assets/images/weather.png";
import laughs from "../Assets/images/laughs.JPG";
import html from "../Assets/images/icons/html5.svg";
import css from "../Assets/images/icons/css3.svg";
import js from "../Assets/images/icons/javascript.svg";
import bootstrap from "../Assets/images/icons/bootstrap.svg";
import git from "../Assets/images/icons/git.svg";
import responsive from "../Assets/images/icons/responsive.svg";
import bulma from "../Assets/images/icons/bulma.png";
import mongo from "../Assets/images/icons/mongo.png"

// --------------------------------------- Project List
export const ProjectList = [
  {
    img: streamflow,
    title: "StreamFlow",
    description: "StreamFlow is a project management application where users can create a profile to manage solo and team projects. Each project allows users to create tasks that can be assigned to users and have due dates and levels of urgency.",
    tech_stack: "React, JavaScript, NodeJS, Bulma CSS, MomentJS, MongoDB, Express",
    github_url: "https://github.com/imanid-code/streamflow",
    demo_url: "https://streamflowteam4.herokuapp.com/",
  },
  {
    img: subTracker,
    title: "Subscription Tracker",
    description:
      "Subscription Tracker is an application that tracks various recurring subscriptions and costs laid out neatly via a list and calendar.",
    tech_stack: "JavaScript, HTML, MySQL, jQuery, Sequelize, Tailwind CSS, MomentJS, Passport, Full Calandar",
    github_url: "https://github.com/JaredWeaver/Subscription-Tracker",
    demo_url: "https://subscription-trkr.herokuapp.com/",
  },
  {
    img: empDir,
    title: "Employee Directory",
    description: "A React application that uses the Random User Generator API to generate a list of users for a fake employee list.",
    tech_stack: "React, JavaScript, Bootstrap",
    github_url: "https://github.com/LinosM/employee-directory",
    demo_url: "https://linosm.github.io/employee-directory/",
  },
  {
    img: weather,
    title: "Weather Dashboard",
    description:
      "This application ultilizes the OpenWeather API to show the current weather conditions along with the forcast for the next 5 days. The last 10 cities searched are also saved and stored on the left-hand side of the page.",
    tech_stack: "JavaScript, HTML, Bootstrap, jQuery",
    github_url: "https://github.com/LinosM/WeatherDashboard",
    demo_url: "https://linosm.github.io/WeatherDashboard/",
  },
  {
    img: laughs,
    title: "Laughs & Eats",
    description:
    "Laughs & Eats lists restaurants in your area along with several jokes to use for your date!",
    tech_stack: "JavaScript, HTML, Bootstrap, jQuery",
    github_url: "https://github.com/kcrammer/Laughs-and-Eats",
    demo_url: "https://kcrammer.github.io/Laughs-and-Eats/",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: html,
    name: "HTML",
  },
  {
    img: css,
    name: "CSS",
  },
  {
    img: js,
    name: "JavaScript",
  },
  {
    img: bootstrap,
    name: "Bootstrap",
  },
  {
    img: git,
    name: "Git",
  },
  {
    img: responsive,
    name: "Responsive",
  },
  {
    img: bulma,
    name: "Bulma",
  },
  {
    img: mongo,
    name: "MongoDB",
  },
];
