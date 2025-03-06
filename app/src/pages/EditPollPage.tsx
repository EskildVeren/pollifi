import { Link, useParams } from "react-router-dom";

function EditPollPage() {
  const params = useParams();

  return (
    <div>
      Edit poll {params.pollId} <br />
      <Link to={"/"}>Trykk for å dra tilbake til hjemsiden</Link>
    </div>
  );
}

export default EditPollPage;
