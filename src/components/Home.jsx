import BackToTopButton from "./BacktoTopButton";
import Button from "./Button";
import Navbar from "./Navbar/Navbar";
import Team from "./Team";

function Home() {
	return (
		<div>
			<Navbar />
			<div className="pt-48">
				<div className="mb-40 flex flex-col px-48">
					<h2 className="text-6xl font-semibold text-right">
						Exclusive Agency For
					</h2>
					<span className="text-8xl text-center text-indigo-500 leading-relaxed">
						Appointment Scheduling
					</span>
					<h2 className="text-5xl text-right font-semibold">Solutions</h2>
					<div className="xl:lg:flex md:flex-col md:sm:xs:space-y-6 justify-center items-center space-x-8 pt-12">
						<Button
							buttonname="Get Started"
							buttonlink="/schedulizer/services"
						/>
						<p className="text-indigo-600 italic font-thin">
							by looking at the services provided on our platform and find the
							right match for your needs
						</p>
					</div>
				</div>

				<div
					className="bg-cover bg-fixed bg-center justify-center items-center py-6"
					style={{ backgroundImage: "url('./images/parallax1.jpg')" }}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-12 mx-0">
						<path
							fill="#ffffff"
							fillOpacity="1"
							d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
						></path>
					</svg>
					<h1 className="text-white text-8xl text-center pb-28 font-semibold delay-[300ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0" data-taos-offset="200">
						This is Parallax Effect
					</h1>
					<div className="grid xl:lg:grid-cols-2 md:sm:xs:grid-cols-1 gap-16 px-24">
						<img
							src="./images/services-page.png"
							alt="services"
							className="rounded-xl shadow-2xl hover:scale-110 duration-500"
						/>
						<img
							src="./images/businessinfo-page.png"
							alt="services"
							className="rounded-xl shadow-2xl mt-28 hover:scale-110 duration-500"
						/>
					</div>
					<div className="px-96 py-12">
						<h2 className="my-20 text-8xl text-white text-center font-semibold">
							Meet the team
						</h2>
						<Team />
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="mx-0 -mb-8"
					>
						<path
							fill="#ffffff"
							fillOpacity="1"
							d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,245.3C672,245,768,235,864,213.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>

				<div className="py-20 px-36">
					<h1 className="text-6xl text-center mb-12 font-semibold">
						Tempor sit labore nostrud
					</h1>
					<div>
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
							est. Aliquip pariatur nulla dolor amet quis aliqua sit nisi
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
						<br />
						<br />
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
							est. Aliquip pariatur nulla dolor amet quis aliqua sit nisi
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
