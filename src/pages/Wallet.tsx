import { Link } from "react-router-dom";
import './Common.css';
//
const WalletPage = () => {
  return (
		<div>
			<h1>Welcome to the Wallet page</h1>
			<Link to="/home"> Return to the Home page </Link>
		</div>
  );
}
//
export default WalletPage;