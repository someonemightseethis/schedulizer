import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="flex min-h-screen flex-col scroll-smooth bg-[#FAF8ED] pattern-texture-indigo-600/30 pattern-texture-scale-[1.5]">
			<Navbar />
			<div
				className="flex-grow bg-cover bg-fixed bg-center"
				style={{ backgroundImage: "url('./images/parallax5.webp')" }}>
				{children}
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
