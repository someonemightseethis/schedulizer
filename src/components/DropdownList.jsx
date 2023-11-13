import PropTypes from "prop-types";

function DropdownList({ listLength, handleOptionSelect, dropdownliname }) {
	const listItems = Array.from({ length: listLength }, (_, index) => (
		<li key={index}>
			<a
				className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
				href="#"
				data-te-dropdown-item-ref
				onClick={() => handleOptionSelect(index)}
			>
				{dropdownliname(index + 1)}
			</a>
		</li>
	));

	return (
		<ul
			className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
			aria-labelledby="dropdownMenuButton1"
			data-te-dropdown-menu-ref
		>
			{listItems}
		</ul>
	);
}

DropdownList.propTypes = {
	listLength: PropTypes.number.isRequired,
	handleOptionSelect: PropTypes.func.isRequired,
	dropdownliname: PropTypes.func.isRequired,
};

export default DropdownList;