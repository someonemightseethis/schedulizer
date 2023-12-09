import BackToTopButton from "./BacktoTopButton";
import Button from "./Button";
import Navbar from "./Navbar/Navbar";
import Team from "./Team";
// import { useSpring, animated } from "@react-spring/web";

function Home() {
	// const props = useSpring({
	// 	from: { opacity: 0.2 },
	// 	to: { opacity: 1 },
	// });

	return (
		<div>
			<Navbar />
			<div className="mx-auto bg-[#FAF8ED] pt-48 pattern-texture-indigo-500/30 pattern-texture-scale-[1.5]">
				<div className="mb-24 flex flex-col">
					<div>
						<h2 className="px-40 text-right font-bebas text-6xl font-medium">
							Exclusive Agency For
						</h2>
						<h2 className="px-6 text-center font-bebas text-[12rem] font-extrabold leading-relaxed text-indigo-500">
							Appointment Scheduling
						</h2>
						<h2 className="px-40 text-right font-bebas text-5xl font-medium">
							Solutions
						</h2>
					</div>
					<div className="items-center justify-center space-x-8 pt-12 md:sm:xs:space-y-6 md:flex-col xl:lg:flex">
						<Button
							buttonName="GET STARTED"
							buttonLink="/schedulizer/services"
						/>
						<p className="font-muktaVaani text-xl font-light italic text-indigo-600">
							by looking at the services provided on our platform and find the
							right match for your needs
						</p>
					</div>
				</div>

				<div
					className="mx-auto items-center justify-center bg-cover bg-fixed bg-center py-6"
					style={{ backgroundImage: "url('./images/parallax5.jpg')" }}>
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
					<div className="grid gap-16 px-24 md:grid-cols-1 xl:lg:grid-cols-2">
						<img
							src="./images/services-page.png"
							alt="services"
							className="rounded-xl shadow-2xl duration-500 hover:scale-110 hover:cursor-pointer"
						/>
						<img
							src="./images/businessinfo-page.png"
							alt="services"
							className="mt-28 rounded-xl shadow-2xl duration-500 hover:scale-110 hover:cursor-pointer"
						/>
					</div>
					<div className="py-12 xs:px-0 sm:px-0 md:px-52 lg:px-72 xl:px-80">
						<h2 className="my-20 text-center font-bebas text-[10rem] font-semibold text-white">
							Meet the team
						</h2>
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

				<div className="px-36 py-20">
					<h1 className="mb-12 text-center font-bebas text-9xl font-semibold">
						Tempor sit labore nostrud
					</h1>
					<div className="px-36 font-muktaVaani text-xl">
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
		</div>
	);
}

export default Home;
