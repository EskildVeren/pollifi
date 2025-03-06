import React from "react";
import { Link, useParams } from "react-router-dom";

function PollResponsePage() {
  const params = useParams();

  return (
    <div>
      Response to poll "{params.pollId}" is unavailable at the moment <br />
      <Link to={"/"}>Trykk for å dra tilbake til hjemsiden</Link>
    </div>
  );
}

export default PollResponsePage;
