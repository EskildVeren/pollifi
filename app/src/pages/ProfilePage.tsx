import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      Profile <br />
      <Link to={"/"}>Trykk for å dra tilbake til hjemsiden</Link>
    </div>
  );
}

export default ProfilePage;
