import BackToTopButton from "./BacktoTopButton";
import Button from "./Button";
import Layout from "./Layout";
import Team from "./Team";
// import { useSpring, animated } from "@react-spring/web";

function Home() {
	// const props = useSpring({
	// 	from: { opacity: 0.2 },
	// 	to: { opacity: 1 },
	// });

	return (
		<Layout>
			<div className="bg-[#FAF8ED] pt-48 pattern-texture-indigo-600/30 pattern-texture-scale-[1.5]">
				<div className="mb-24 flex flex-col">
					<div className="">
						<h2 className="px-8 text-center font-bebas text-6xl font-medium sm:px-32 sm:text-right">
							Exclusive Agency For
						</h2>
						<h1 className="lg:text-5r xl:text-5r text-center font-bebas text-6xl font-semibold text-indigo-500 sm:text-6xl md:text-8xl">
							Appointment Scheduling
						</h1>
						<h2 className="px-8 text-center font-bebas text-6xl font-medium sm:px-32 sm:text-right">
							Solutions
						</h2>
					</div>
					<div className="items-center justify-center pt-12 sm:space-y-6 md:flex-col lg:flex">
						<div className="py-4 xs:px-16 md:px-32 xl:px-64">
							<Button
								buttonName="GET STARTED"
								buttonLink="/schedulizer/services"
							/>
						</div>
						<p className="justify-center px-4 text-center font-muktaVaani text-lg font-light italic text-indigo-600">
							by looking at the services provided on our platform and find the
							right match for your needs
						</p>
					</div>
				</div>

				<div
					className="mx-auto items-center justify-center bg-cover bg-fixed bg-center py-6"
					style={{ backgroundImage: "url('./images/parallax5.webp')" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="mx-0 -mt-12 pattern-texture-indigo-500/40 pattern-texture-scale-[0.8]">
						<path
							fill="#FAF8ED"
							fillOpacity="1"
							className="pattern-texture-indigo-500/40 pattern-texture-scale-[0.8]"
							d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
					</svg>
					{/* <h1 className="pb-28 text-center font-bebas text-9xl font-semibold text-white">
						This is Parallax Effect
					</h1> */}
					<div className="grid px-4 sm:gap-y-1 sm:px-8 md:grid-cols-1 md:gap-y-1 md:px-16 lg:grid-cols-2 lg:px-24 xl:gap-16 xl:px-32">
						<img
							src="./images/services-page.png"
							alt="services"
							className="rounded-xl shadow-2xl duration-300 hover:scale-105 hover:cursor-pointer"
						/>
						<img
							src="./images/businessinfo-page.png"
							alt="services"
							className="mt-28 rounded-xl shadow-2xl duration-300 hover:scale-105 hover:cursor-pointer"
						/>
					</div>
					<div className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-32">
						<h1 className="md:text-10xl lg:text-11xl xl:text-12xl mb-12 text-center font-bebas text-8xl font-semibold text-[#FAF8ED] sm:text-9xl">
							Meet the team
						</h1>
						<Team />
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="mx-0 -mb-8">
						<path
							fill="#FAF8ED"
							fillOpacity="1"
							d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,245.3C672,245,768,235,864,213.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>

				<div className="mx-auto max-w-screen-xl px-8 py-20">
					<h1 className="md:text-10xl lg:text-11xl xl:text-12xl mb-12 text-center font-bebas text-8xl font-semibold sm:text-9xl">
						Tempor sit labore nostrud
					</h1>
					<div className="font-muktaVaani text-xl">
						<p>
							Exercitation non Lorem exercitation tempor amet ad esse velit.
							Anim deserunt id nulla quis ex magna culpa exercitation. Mollit
							consequat enim eiusmod cupidatat commodo eiusmod nulla. Id quis
							amet incididunt cillum dolore consectetur nulla incididunt laborum
							excepteur consectetur consectetur sunt tempor. Minim fugiat sint
							sunt ad elit laboris est sit est laboris labore do velit. Cillum
							aliquip pariatur deserunt eiusmod. Consequat irure nulla
							adipisicing deserunt culpa. Veniam enim deserunt sint consequat
							labore. Enim ullamco ea aute duis et nostrud voluptate fugiat
							consectetur et velit cillum anim dolore. In exercitation proident
							proident nostrud voluptate. Fugiat elit esse labore pariatur ex.
							Ex labore esse voluptate nisi in. Ad anim deserunt reprehenderit
							est. <br />
							<br /> Aliquip pariatur nulla dolor amet quis aliqua sit nisi
							officia enim velit. Ad enim eu dolor quis ipsum. Nulla amet
							consectetur adipisicing ullamco qui tempor dolor excepteur dolore
							anim pariatur quis laboris consequat. Consectetur ullamco
							consectetur minim eiusmod quis veniam esse consectetur anim
							nostrud est pariatur laborum. Mollit tempor minim amet esse. Lorem
							officia consequat eiusmod sunt. Proident occaecat velit et
							consequat irure est cupidatat tempor ullamco. Aliquip est pariatur
							ea ut qui ad sit dolor laboris adipisicing officia eiusmod sit.
							Proident Lorem ex cillum sint cupidatat amet nulla veniam laborum
							velit pariatur. Fugiat excepteur culpa sunt est anim sunt. Ea
							voluptate non do proident sunt ad cillum enim esse.
						</p>
					</div>
				</div>
				<BackToTopButton />
			</div>
		</Layout>
	);
}

export default Home;
