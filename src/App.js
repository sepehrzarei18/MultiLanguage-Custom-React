import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { Link, useParams } from "react-router-dom";

import GetSectionByLanguage from "./Utilities/LanguageSetting";

// Components

function App() {
  const { lang } = useParams();
  const static_content = GetSectionByLanguage(lang).Home;

  return (
    <>
      <h2>{static_content.PageTitle}</h2>
      <Link to={`/Register${lang != undefined ? "/" + lang : ""}`}>
        {static_content.RegisterLinkBtn}
      </Link>
    </>
  );
}

/*

 TODO : 

*/

export default App;
