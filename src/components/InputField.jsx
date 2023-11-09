import PropTypes from "prop-types";

function InputField(props) {
	return (
		<div>
			<label htmlFor={props.htmlfor} className="mb-4 px-1 text-sm text-start font-medium text-grey-900">
				{props.labelname}
			</label>
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				className="flex items-center w-full px-3 py-2 mr-2 text-sm border-2 border-black mb-7 placeholder:text-grey-700 text-black rounded-lg focus:border-indigo-500 focus:outline-none"
			/>
		</div>
	);
}

InputField.propTypes = {
	htmlfor: PropTypes.string.isRequired,
    labelname: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default InputField;
