import PropTypes from "prop-types";
import Navbar from "./navbar/Navbar";

function Layout({ children }) {
	return (
		<div className="flex min-h-screen flex-col scroll-smooth">
			<Navbar />
			<div
				className="flex-grow scroll-smooth bg-[#FAF8ED] bg-fixed bg-center pattern-topography-indigo-500/10 pattern-topography-scale-[0.45]"
				// style={{ backgroundImage: "url('./images/parallax5.webp')" }}
			>
				{children}
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
