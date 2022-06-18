import GetSectionByLanguage from "../Utilities/LanguageSetting";
import { useParams } from "react-router-dom";

const Register = () => {
  let { lang } = useParams();

  const static_content = GetSectionByLanguage(lang).Register;

  return (
    <>  
      <h2>{static_content.PageTitle}</h2>
    </>
  );
};

export default Register;
