import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
	return (
		<div className="flex justify-center text-center">
			<Link to={props.buttonlink}>
				<button className="flex justify-center items-center w-full px-6 md:px-4 sm:py-2 xs:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
					{props.buttonname}
				</button>
			</Link>
		</div>
	);
}

Button.propTypes = {
	buttonname: PropTypes.string.isRequired,
	buttonlink: PropTypes.string.isRequired,
};

export default Button;
