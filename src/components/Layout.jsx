import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="flex min-h-screen flex-col bg-[#FAF8ED] pattern-texture-indigo-600/10 pattern-texture-scale-[1.5]">
			<Navbar />
			<div className="flex-grow">{children}</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
