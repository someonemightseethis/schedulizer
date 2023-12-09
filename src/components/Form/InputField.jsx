import PropTypes from "prop-types";

function InputField(props) {
	const isRequired = props.isRequired || false;
	const handleBlur = (e) => {
		if (props.validateOnBlur) {
			props.validate(e.target.value);
		}
	};

	const handleChange = (e) => {
		if (props.onChange) {
			props.onChange(e);
		}
	};

	return (
		<div>
			<label
				htmlFor={props.inputFieldHtmlFor}
				className="text-md text-grey-900 mb-4 px-1 text-start font-poppins font-medium">
				{props.inputFieldLabelName}
			</label>
			{props.fieldType === "textarea" ? (
				<textarea
					id={props.inputFieldId}
					placeholder={props.inputFieldPlaceholder}
					{...(isRequired ? { required: true } : {})}
					cols={props.cols}
					rows={props.rows}
					maxLength={props.maxLength}
					className={`placeholder:text-grey-700 mb-4 mr-2 mt-2 flex w-full items-center rounded-lg border-2 ${
						props.inputFieldError ? "border-red-500" : "border-black"
					} px-3 py-2 font-muktaVaani text-sm text-black focus:border-indigo-500 focus:outline-none`}
					{...(isRequired ? { required: true } : {})}
					onBlur={handleBlur}
					onChange={handleChange}
				/>
			) : (
				<input
					id={props.inputFieldId}
					type={props.inputFieldType}
					placeholder={props.inputFieldPlaceholder}
					pattern={props.inputFieldPattern}
					{...(isRequired ? { required: true } : {})}
					className={`placeholder:text-grey-700 mb-4 mr-2 mt-2 flex w-full items-center rounded-lg border-2 ${
						props.inputFieldError ? "border-red-500" : "border-black"
					} px-3 py-2 font-muktaVaani text-sm text-black focus:border-indigo-500 focus:outline-none`}
					{...(isRequired ? { required: true } : {})}
					onBlur={handleBlur}
					onChange={handleChange}
				/>
			)}
			{props.inputFieldError && (
				<p className="text-red-500 text-sm mt-1">{props.inputFieldError}</p>
			)}
		</div>
	);
}

InputField.propTypes = {
	inputFieldHtmlFor: PropTypes.string.isRequired,
	inputFieldLabelName: PropTypes.string.isRequired,
	inputFieldId: PropTypes.string.isRequired,
	inputFieldType: PropTypes.string.isRequired,
	inputFieldPlaceholder: PropTypes.string.isRequired,
	inputFieldPattern: PropTypes.string,
	isRequired: PropTypes.bool, // New prop for specifying if the input is required
	fieldType: PropTypes.oneOf(["input", "textarea"]), // New prop for specifying the type of input
	cols: PropTypes.number, // New prop for textarea columns
	rows: PropTypes.number, // New prop for textarea rows
	maxLength: PropTypes.number, // New prop for textarea maxLength
	// inputFieldValue: PropTypes.string, // New prop for textarea value
	inputFieldError: PropTypes.string, // New prop for textarea error message
	validateOnBlur: PropTypes.bool, // New prop for enabling validation on blur
	validate: PropTypes.func, // New prop for the validation function
	onChange: PropTypes.func, // New prop for the onChange function
};

export default InputField;
