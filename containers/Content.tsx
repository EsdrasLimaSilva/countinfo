import { useSelector } from "react-redux";
import { selectOperation } from "../app/slices/operation";
import DetailedCountry from "./DetailedCountry";
import HomeCountries from "./HomeCountries";
import SearchedCountries from "./SearchedCountries";

function Content() {
  const operation = useSelector(selectOperation);

  switch (operation) {
    case "home":
      return <HomeCountries />;
    case "detailed":
      return <DetailedCountry />;
    case "search":
      return <SearchedCountries />;
    default:
      return <HomeCountries />;
  }
}

export default Content;
