import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen bg-[#FAF8ED] pattern-texture-indigo-500/30 pattern-texture-scale-[1.5]">
			<Navbar />
			<div className="flex-grow">{children}</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
