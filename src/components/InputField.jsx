import PropTypes from "prop-types";

function InputField(props) {
	return (
		<div>
			<label htmlFor={props.inputfieldhtmlfor} className="mb-4 px-1 text-sm text-start font-medium text-grey-900">
				{props.inputfieldlabelname}
			</label>
			<input
				id={props.inputfieldid}
				type={props.inputfieldtype}
				placeholder={props.inputfieldplaceholder}
				pattern={props.inputfieldpattern}
				className="flex items-center w-full px-3 py-2 mr-2 text-sm border-2 border-black mt-2 mb-4 placeholder:text-grey-700 text-black rounded-lg focus:border-indigo-500 focus:outline-none"
			/>
		</div>
	);
}

InputField.propTypes = {
	inputfieldhtmlfor: PropTypes.string.isRequired,
   inputfieldlabelname: PropTypes.string.isRequired,
    inputfieldid: PropTypes.string.isRequired,
    inputfieldtype: PropTypes.string.isRequired,
    inputfieldplaceholder: PropTypes.string.isRequired,
	inputfieldpattern: PropTypes.string,
};

export default InputField;
