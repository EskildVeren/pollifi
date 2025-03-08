import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      This is an error page. Dont panick, its due to incompetent devs :) <br />
      <Link to={"/"}>Trykk for å dra tilbake til hjemsiden</Link>
    </div>
  );
}

export default ErrorPage;
