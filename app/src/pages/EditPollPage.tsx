import { useParams } from "react-router-dom";

function EditPollPage() {
  const params = useParams();

  return <div>Edit poll {params.pollId}</div>;
}

export default EditPollPage;
