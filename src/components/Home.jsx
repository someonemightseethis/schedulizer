import BackToTopButton from "./BacktoTopButton";
import Button from "./Button";
import Navbar from "./Navbar";
import Team from "./Team";

function Home() {
	return (
		<div>
			<Navbar />
			<div className="pt-48">
				<div className="mb-40 flex flex-col px-48">
					<h2 className="text-6xl font-semibold text-right">
						Exclusive Agency For <br />
					</h2>
					<span className="text-8xl text-center text-indigo-500 leading-relaxed">
						Appointment Scheduling <br />
					</span>
					<h2 className="text-5xl text-right font-semibold">Solutions</h2>
					<div className="flex justify-center items-center space-x-8 pt-12">
						<Button buttonname="Get Started" buttonlink="/fyp-schedulizer/services" />
						<p className="text-indigo-600 italic font-thin">
							by looking at the services provided on our platform and find the
							right match for your needs
						</p>
					</div>
				</div>

				<div className="bg-cover bg-fixed bg-center justify-center items-center bg-[url('https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80')] py-6">
					<h1 className="text-white text-8xl text-center py-28 font-semibold">
						This is Parallax Effect
					</h1>
					<div className="grid grid-cols-2 gap-32 px-24">
						<img
							src="./images/services-page.png"
							alt="services"
							className="rounded-xl shadow-2xl hover:scale-110 duration-500"
						/>
						<img
							src="./images/businessinfo-page.png"
							alt="services"
							className="rounded-xl shadow-2xl my-20 hover:scale-110 duration-500"
						/>
					</div>
				</div>

				<Team />

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
