import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

function DayPicker({ onDaysChange }) {
	const [selectedDays, setSelectedDays] = useState([]);

	const handleCheckboxChange = (day) => {
		setSelectedDays((prevSelectedDays) =>
			prevSelectedDays.includes(day)
				? prevSelectedDays.filter((selectedDay) => selectedDay !== day)
				: [...prevSelectedDays, day]
		);
	};

	const formatSelectedDays = useCallback(() => {
		const sortedDays = selectedDays.sort();
		if (sortedDays.length > 1) {
			const firstDay = sortedDays[0].substring(0, 3);
			const lastDay = sortedDays[sortedDays.length - 1].substring(0, 3);
			return `${firstDay}-${lastDay}`;
		}
		return sortedDays.join(", ");
	}, [selectedDays]);

	useEffect(() => {
		onDaysChange(formatSelectedDays());
	}, [selectedDays, onDaysChange, formatSelectedDays]);

	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<div className="text-md flex items-center justify-between pb-4">
			<label className="inline-block pl-[0.15rem] font-poppins font-medium">
				Select Appointment Days:
			</label>
			{days.map((day) => (
				<div
					key={day}
					className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
					<input
						className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-black outline-none checked:border-indigo-500 checked:bg-indigo-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] focus:transition-[border-color_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-[#FAF8ED] checked:focus:after:bg-transparent"
						type="checkbox"
						id={`appointmentDay${day}`}
						value={day.toLowerCase()}
						onChange={() => handleCheckboxChange(day.toLowerCase())}
						required
					/>
					<label
						className="inline-block pl-[0.15rem] font-poppins font-medium hover:cursor-pointer"
						htmlFor={`appointmentDay${day}`}>
						{day}
					</label>
				</div>
			))}
		</div>
	);
}

DayPicker.propTypes = {
	onDaysChange: PropTypes.func.isRequired,
};

export default DayPicker;
