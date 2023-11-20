import { useSpring, animated } from "@react-spring/web";

function DashboardStatistics() {
	const { barPlayhead } = useSpring({
		barPlayhead: 1,
		from: { barPlayhead: 0 },
	});

	return (
		<div>
			<h2 className="text-4xl inline-flex items-baseline font-semibold font-poppins mb-4">
				Good day,
				<p className="font-medium font-ptSansCaption text-xl">
					&ensp; username
				</p>
			</h2>
			<div className="grid grid-cols-2 gap-4 font-muktaVaani bg-[#FAF8ED]">
				<div className="p-4 border-2 border-black  rounded-lg text-gray-800">
					<div className="font-bold text-2xl leading-none">20</div>
					<div className="mt-2">Tasks finished this week</div>
				</div>
				<div className="p-4 border-2 border-black  rounded-lg text-gray-800">
					<div className="font-bold text-2xl leading-none">5.5</div>
					<div className="mt-2">Tracked hours this week</div>
				</div>
				<div className="border-2 border-black col-span-2 rounded-lg">
					<div className="p-4 rounded-lg text-gray-800">
						<div className="font-bold text-xl leading-none">
							Your daily appointments
						</div>
						<div className="mt-2">5 of 8 completed</div>
						<svg
							className="w-44 mt-3"
							height="6"
							viewBox="0 0 200 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="200" height="6" rx="3" fill="#E0E7FF" />
							<animated.rect
								width={barPlayhead.to((i) => i * (3 / 5) * 200)}
								height="6"
								rx="3"
								fill="url(#paint0_linear)"
							/>
							<rect x="38" width="2" height="6" fill="white" />
							<rect x="78" width="2" height="6" fill="white" />
							<rect x="118" width="2" height="6" fill="white" />
							<rect x="158" width="2" height="6" fill="white" />
							<defs>
								<linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
									<stop stopColor="#A5B4FC" />
									<stop offset="1" stopColor="#6366F1" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardStatistics;
