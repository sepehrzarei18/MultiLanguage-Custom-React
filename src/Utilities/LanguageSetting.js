import StaticDataComponents from "../Data/StaticDataComponents.json";

const GetSectionByLanguage = (lang = "") => {
  switch (lang.trim().toLowerCase()) {
    case "en-us": {
      return StaticDataComponents.Language["en-us"];
    }
    case "fa-ir": {
      return StaticDataComponents.Language["fa-ir"];
    }
    case "ar-ue": {
      return StaticDataComponents.Language["ar-ue"];
    }
    default: {
      return StaticDataComponents.Language["en-us"];
    }
  }
};

export default GetSectionByLanguage;
