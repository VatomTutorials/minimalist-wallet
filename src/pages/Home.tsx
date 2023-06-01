import { Link } from "react-router-dom";
import './Common.css';
//
const HomePage = () => {
  return (
		<div>
			<h1>Welcome to the Home page</h1>
			<Link to="/about"> Click here to go to the About page </Link>
			<br/><br/>
			<Link to="/wallet"> Click here to go to the Wallet page </Link>
		</div>
  );
}
//
export default HomePage;