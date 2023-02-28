import Wrapper from "../../assets/wrappers/SearchMatches";
import { Link } from "react-router-dom";

export default function SearchMatches({ matches, onClick }) {
  console.log(matches);
  return (
    <Wrapper>
      {" "}
      <div className="matches-container">
        {matches.map((match, index) => {
          return (
            <div key={index} onClick={onClick}>
              {" "}
              <Link
                to={"/products/single-product/" + match._id}
                className="link"
              >
                {match.manufactuer + " " + match.model}
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
