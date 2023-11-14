import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DropdownList from "./DropdownList";

function DropdownButton(props) {
	const [selectedOption, setSelectedOption] = useState(null);
	const [dropdowListOpen, setDropdowListOpen] = useState(false);
	const [dropdownListLength, setDropdownListLength] = useState(null);
	const [selectedValue, setSelectedValue] = useState(null); // New state
	const dropdownRef = useRef(null);

	useEffect(() => {
		setDropdownListLength(parseInt(props.dropdownlistLength, 10));
	}, [props.dropdownlistLength]);

	useEffect(() => {
		console.log(
			"Selected Value(" + props.dropdownlabelname + "):",
			selectedValue
		);
	}, [selectedValue, props.dropdownlabelname]);

	const handleOptionSelect = (optionId) => {
		setSelectedOption(optionId);
		setDropdowListOpen(false);

		setSelectedValue(props[`dropdownliname${optionId + 1}`]);
	};

	const dropdownliname = (index) => props[`dropdownliname${index}`];

	const buttonColorClass =
		selectedOption !== null ? "text-black" : "text-gray-400";
	const buttonBorderColorClass = dropdowListOpen
		? "focus:border-indigo-500"
		: "focus:border-black";

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdowListOpen(false);
			}
		};

		// Add event listener when the dropdown is open
		if (dropdowListOpen) {
			document.addEventListener("click", handleClickOutside);
		}

		// Remove event listener when the component is unmounted
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [dropdowListOpen]);

	const handleButtonClick = () => {
		setDropdowListOpen((prevOpen) => !prevOpen);
	};

	return (
		<div className="relative" data-te-dropdown-ref ref={dropdownRef}>
			<label
				htmlFor={props.dropdownlabelhtmlfor}
				className="mb-4 px-1 text-sm text-start font-medium text-grey-900"
			>
				{props.dropdownlabelname}
			</label>
			<button
				className={`flex items-center bg-white justify-between text-end w-full px-3 py-2 mt-2 mb-4 text-sm border-2 border-black rounded-lg ${buttonBorderColorClass} ${buttonColorClass}`}
				type="button"
				id="dropdownMenuButton1"
				data-te-dropdown-toggle-ref
				aria-expanded="false"
				data-te-ripple-init
				data-te-ripple-color="light"
				onClick={handleButtonClick}
			>
				{selectedOption !== null
					? dropdownliname(selectedOption + 1)
					: props.dropdownbuttonname}
				<span className="mr-2 w-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="black"
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
			{dropdownListLength && (
				<DropdownList
					dropdowListOpen={dropdowListOpen}
					listLength={dropdownListLength}
					handleOptionSelect={handleOptionSelect}
					dropdownliname={dropdownliname}
				/>
			)}
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
