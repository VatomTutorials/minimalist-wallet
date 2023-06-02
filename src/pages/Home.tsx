import { Link } from "react-router-dom";
import appLogo from '../assets/app-logo.png';
import './Common.css';
//
const HomePage = () => {
  return (
 		<div className="page_wrap_gp">
			<div className="page_torso_gp">
				<img src={appLogo} alt="app logo" />
			</div>
			<div className="page_nav_footer_gp">
				<div>
					<br/>
					<h1>Welcome to the Home page</h1>
					<Link to="/about"> Click here to go to the About page </Link>
					<br/> <br/>
					<Link to="/wallet"> Click here to go to the Wallet page </Link>
				</div>
			</div>
		</div>
  );
}
//
export default HomePage;