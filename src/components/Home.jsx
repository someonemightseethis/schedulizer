import BackToTopButton from "./BacktoTopButton";
import Button from "./Button";
import Layout from "./Layout";
import Team from "./Team";
import { animate, scroll } from "motion";
import { useEffect } from "react";

function Home() {
	useEffect(() => {
		animate(
			".appointment",
			{ scale: [0.5, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
		animate(".exclusive", { x: [-1000, 1] }, { duration: 2 });
		animate(".solution", { x: [500, 1] }, { duration: 2 });
		scroll(animate(".heroText", { scale: [1, 1.5] }));
	});

	return (
		<Layout>
			<div className="flex flex-col overflow-hidden rounded-b-3xl pb-32 pt-52">
				<div className="heroText">
					<h2 className="exclusive px-8 text-center font-poppins text-4xl font-light sm:px-32 sm:text-start">
						Exclusive Agency For
					</h2>
					<h1 className="appointment mt-6 text-center font-bebas text-4xl font-semibold tracking-wide text-indigo-500 sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[10rem]">
						Appointment Scheduling
					</h1>
					<h2 className="solution px-8 text-center font-poppins text-4xl font-light sm:px-32 sm:text-right">
						Solutions
					</h2>
				</div>
				<div className="items-center justify-center pt-24 sm:space-y-6 md:flex-col lg:flex">
					<div className="xs:px-16 md:px-32 xl:px-64">
						<Button
							buttonName="GET STARTED"
							buttonLink="/schedulizer/services"
						/>
					</div>
					<p className="justify-center px-4 text-center font-muktaVaani text-lg font-extralight italic">
						by looking at the services provided on our platform and find the
						right match for your needs
					</p>
				</div>
			</div>

			<div className="mx-auto items-center justify-center py-6">
				<div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
					<h1 className="md:text-10xl text-center font-bebas text-8xl font-semibold tracking-wide text-indigo-500 sm:text-9xl lg:text-8xl xl:text-8xl">
						Meet the team.
					</h1>
					<Team />
				</div>

				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					className="mx-0 -mb-8">
					<path
						fill="#FAF8ED"
						fillOpacity="1"
						d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,245.3C672,245,768,235,864,213.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg> */}
			</div>

			<div className="overflow-hidden rounded-t-3xl px-8 py-20">
				<h1 className="md:text-10xl text-center font-bebas text-8xl font-semibold tracking-wide text-indigo-500 sm:text-9xl lg:text-8xl xl:text-8xl">
					About Our Web App.
				</h1>
				<div className="text-md px-72 py-12 font-muktaVaani">
					<p>
						Our project revolves around the creation of a cutting-edge
						scheduling web application tailored to the needs of local and small
						businesses. Leveraging state-of-the-art technologies such as React,
						Tailwind CSS, Node.js, and MongoDB, we aim to deliver an
						all-encompassing scheduling platform that transcends the
						capabilities of existing solutions.
						<br />
						<br />
						This endeavor is fueled by the desire to streamline and elevate the
						scheduling experiences of our target audience, empowering them to
						efficiently manage appointments, meetings, and events with ease and
						precision. By focusing on core features like user registration and
						authentication, customizable booking pages, and automated email
						notifications, we are dedicated to simplifying the scheduling
						process.
						<br />
						<br />
						Additionally, we are pioneering innovative functionalities such as
						group scheduling, meeting customization, payment integration,
						analytics, and AI-powered scheduling assistance. These features are
						carefully designed to address the specific challenges faced by local
						businesses, offering seamless solutions for their diverse scheduling
						needs. Our ultimate goal is to provide a comprehensive and user-
						friendly scheduling tool that enhances the operational efficiency of
						said small businesses, enabling them to thrive in an increasingly
						digital world.
					</p>
				</div>
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default Home;
