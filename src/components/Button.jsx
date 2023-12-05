import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
	// Determine the button type based on the presence of the prop
	const buttonType = props.buttonType || "button";

	return (
		<div className="flex justify-center text-center">
			<Link to={props.buttonLink}>
				<button
					type={buttonType}
					className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-6 font-jaldi text-sm text-white transition-colors duration-200 hover:bg-indigo-600 xs:py-2 sm:py-2 md:px-4">
					{props.buttonName}
				</button>
			</Link>
		</div>
	);
}

Button.propTypes = {
	buttonName: PropTypes.string.isRequired,
	buttonLink: PropTypes.string.isRequired,
	buttonType: PropTypes.oneOf(["button", "submit", "reset"]), // Add buttonType prop
};

export default Button;
