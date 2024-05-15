import {
  html,
  css,
  js,
  react,
  tailwind,
  bootstrap,
  git,
  npm,
  gitDark,
  personalWebsite,
  movieApp,
  expenseTracker,
  weatherApp,
  recipeApp,
  dailyBlog,
  exchangeApp,
  pokedb,
  videoCall,
} from "../assets";

const techStacks = [
  {
    id: 1,
    icon: html,
    text: "HTML",
    lvl: "advanced",
  },
  {
    id: 2,
    icon: css,
    text: "Css",
    lvl: "advanced",
  },
  {
    id: 3,
    icon: js,
    text: "Javascript",
    lvl: "advanced",
  },
  {
    id: 4,
    icon: react,
    text: "React",
    lvl: "Intermediate",
  },
  {
    id: 5,
    icon: tailwind,
    text: "Tailwind",
    lvl: "Intermediate",
  },
  {
    id: 6,
    icon: bootstrap,
    text: "Bootstrap",
    lvl: "Intermediate",
  },
];

const tools = [
  {
    id: 1,
    icon: git,
    text: "git",
  },
  {
    id: 2,
    icon: gitDark,
    text: "GitHub",
  },
  {
    id: 3,
    icon: npm,
    text: "NPM",
  },
];

const projects = [
  {
    id: 1,
    posterPath: personalWebsite,
    siteName: "Personal Website",
    readMeText:
      "My personal website.I created this website to display my profile,skill and project.",
    createBy: "React Js,TailwindCss",
    site_url: "https://aungmyatoo2005.github.io/portfolio/",
    repo_url: "https://github.com/AungMyatOo2005/portfolio",
  },
  {
    id: 2,
    posterPath: movieApp,
    siteName: "Metflix (Movie App)",
    readMeText:
      "Movie recommend website.In Website user can search movie and can select movie list by genres.User can add movie to favorite list.User can see each movie of trailer, original website and full cast.",
    createBy: "React Js,TailwindCss,TMDb API",
    site_url: "https://aungmyatoo2005.github.io/movie-app/",
    repo_url: "https://github.com/AungMyatOo2005/movie-app",
  },
  {
    id: 3,
    posterPath: dailyBlog,
    siteName: "Daily Blog",
    readMeText:
      'I created this web page by react ,tailwindcss and atc...Firstly,please commend in terminal "npm run dev"Secondly,please commentd in new terminal "npm run json-server". In the website user can register and login.If user ar unauthorized user can\'t reach profile page and he can see only last 8 post ,BTW I was use pagination sir.Authorized user can post,edit and delete  his post and under all comments of his posts.He can comment in other users posts.He can delete and edit his comment (he only can edit),Day Mode and Night Mode for user friendly .Authorize user can reach profile page and he will edit his personal details.User can logout.',
    createBy: "React Js,TailwindCs,Json Server",
    repo_url: "https://github.com/AungMyatOo2005/exchange-app.git",
  },
  {
    id: 4,
    posterPath: recipeApp,
    siteName: "Recipes App",
    readMeText:
      "The recipe app.User can search meal and can add to favorite list.User can see how to make what user choice meal and youtube video.",
    createBy: "React Js,TailwindCss,TheMealDB API",
    site_url: "https://aungmyatoo2005.github.io/the-meal-db/",
    repo_url: "https://github.com/AungMyatOo2005/the-meal-db.git",
  },
  {
    id: 5,
    posterPath: pokedb,
    siteName: "Poke Db",
    readMeText:
      "PokeDb website.All of pokemon contain in pokedb website.User can search pokemon by pokemon name and user can add pokemon to favorite pokemon list.",
    createBy: "React Js,TailwindCss,POKE api",
    site_url: "https://aungmyatoo2005.github.io/pokedb/",
    repo_url: "https://github.com/AungMyatOo2005/pokedb.git",
  },
  {
    id: 6,
    posterPath: expenseTracker,
    siteName: "Expense Tracker",
    readMeText:
      "Expense Tracker website.In site user can note transactions list and can see total positive value, negative value and total value.After not user can add to history with list name.I code this path by local storage.",
    createBy: "React Js,TailwindCss",
    site_url: "https://aungmyatoo2005.github.io/expense-tracker/",
    repo_url: "https://github.com/AungMyatOo2005/expense-tracker",
  },
  {
    id: 7,
    posterPath: exchangeApp,
    siteName: "Exchange App",
    readMeText:
      "Money Exchange Application.User can compare exchange rate from many countries.",
    createBy: "React Js,TailwindCss,ExchangeRate API",
    site_url: "https://aungmyatoo2005.github.io/exchange-app/",
    repo_url: "https://github.com/AungMyatOo2005/exchange-app.git",
  },
  {
    id: 8,
    posterPath: videoCall,
    siteName: "Video Call(gp call)",
    readMeText: "Group call web app like zoom.I create this using zegocloud",
    createBy: "React Js,ZegoCloud",
    site_url: "https://aungmyatoo2005.github.io/video_call_app/",
    repo_url: "https://github.com/AungMyatOo2005/video_call_app/",
  },
  {
    id: 9,
    posterPath: weatherApp,
    siteName: "Weather App",
    readMeText:
      "The weather application.User can know weather condition by search city name.",
    createBy: "HTML,CSS,Js,OWM API",
    site_url: "https://aungmyatoo2005.github.io/weather-app/",
    repo_url: "https://github.com/AungMyatOo2005/weather-app",
  },
];

export { techStacks, tools, projects };
