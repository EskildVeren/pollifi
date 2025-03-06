import React from "react";
import { useParams } from "react-router-dom";

function PollResponsePage() {
  const params = useParams();

  return <div>Response to poll "{params.pollId}" is unavailable at the moment</div>;
}

export default PollResponsePage;
