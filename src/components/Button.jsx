import PropTypes from "prop-types";

function Button(props) {
	return (
		<div className="flex justify-center text-center">
			<button className="flex justify-center items-center w-full px-6 md:px-6 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
				{props.buttonname}
			</button>
		</div>
	);
}

Button.propTypes = {
	buttonname: PropTypes.string.isRequired,
};

export default Button;
