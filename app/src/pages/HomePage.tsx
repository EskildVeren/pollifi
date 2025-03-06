import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      Home <br />
      <Link to={"/profile"}> Min profil</Link> <br />
      <Link to={"/login"}> Logg inn</Link> <br />
      <Link to={"/signup"}> Registrer deg</Link> <br />
      <Link to={"/polls/42/respond"}> Svar på en udnersøkelse</Link> <br />
      <Link to={"/polls/42/edit"}> Endre en undersøkelse</Link> <br />
      <Link to={"/lala"}> Gå hit for å se feilmelding</Link> <br />
    </div>
  );
}

export default HomePage;
