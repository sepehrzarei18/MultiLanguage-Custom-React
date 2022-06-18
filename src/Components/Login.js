import { useParams } from "react-router-dom";

import GetSectionByLanguage from "../Utilities/LanguageSetting";

const Login = () => {
  let { lang } = useParams();

  const static_content = GetSectionByLanguage(lang).Login;

  return (
    <>
      <h2>{static_content.PageTitle}</h2>
    </>
  );
};

export default Login;
