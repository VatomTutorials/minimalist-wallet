import { useEffect, useRef } from "react";
import { VatomWallet } from "@vatom/wallet-sdk";
import { Link } from "react-router-dom";
import './Common.css';
//
const WalletPage = () => {
	const divRef = useRef(null);

	const accessToken = "";
	// const businessId  = "";
	const businessId  = "vmVYSPtv7R";

	useEffect(() => {
		//console.log(import.meta.env.VITE_CLIENT_ID);
		//console.log(import.meta.env.VITE_CLIENT_SECRET);
		if (divRef.current) {
			new VatomWallet(divRef.current, accessToken, businessId, {
				baseUrl: "https://wallet.vatom.com"
				// baseUrl: "https://wow.vatom.com"
			});
		}
	}, [divRef]);

  return (
		<div className="page_wrap_gp">
			<div className="page_torso_gp" ref={divRef}/>
			<div className="page_nav_footer_gp">
				<div>
					<br/>
					<h1>Welcome to the Wallet page</h1>
					<Link to="/home"> Return to the Home page </Link>
				</div>
			</div>
		</div>
  );
}
//
export default WalletPage;