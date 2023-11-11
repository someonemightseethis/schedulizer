import { useState } from "react";
import { Dropdown, Ripple, initTE } from "tw-elements";
import PropTypes from "prop-types";
import DropdownList from "./DropdownList";

initTE({ Dropdown, Ripple });

function DropdownButton(props) {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (optionId) => {
		setSelectedOption(optionId);
	};

	const dropdownliname = (index) => props[`dropdownliname${index}`];

	const buttonColorClass =
		selectedOption !== null ? "text-black" : "text-gray-400";

	return (
		<div className="relative" data-te-dropdown-ref>
			<label
				htmlFor={props.dropdownlabelhtmlfor}
				className="mb-4 px-1 text-sm text-start font-medium text-grey-900"
			>
				{props.dropdownlabelname}
			</label>
			<button
				className={`flex items-center justify-between text-end w-full px-3 py-2 mt-2 mb-4 text-sm border-2 border-black rounded-lg focus:border-indigo-500 focus:outline-none ${buttonColorClass}`}
				type="button"
				id="dropdownMenuButton1"
				data-te-dropdown-toggle-ref
				aria-expanded="false"
				data-te-ripple-init
				data-te-ripple-color="light"
			>
				{selectedOption !== null
					? dropdownliname(selectedOption + 1)
					: props.dropdownbuttonname}
				<span className="mr-2 w-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</button>
			<DropdownList
				listLength={props.dropdownlistLength}
				handleOptionSelect={handleOptionSelect}
				dropdownliname={dropdownliname}
			/>
		</div>
	);
}

DropdownButton.propTypes = {
	dropdownbuttonname: PropTypes.string.isRequired,
	dropdownlabelname: PropTypes.string.isRequired,
	dropdownlabelhtmlfor: PropTypes.string.isRequired,
	dropdownlistLength: PropTypes.number.isRequired,
};

Array.from(
	{ length: DropdownButton.propTypes.dropdownlistLength },
	(_, index) => {
		DropdownButton.propTypes[`dropdownliname${index + 1}`] =
			PropTypes.string.isRequired;
	}
);

export default DropdownButton;
