import Header from "./components/Header";
import Hero from "./components/Hero";
import AfterHero from "./components/AfterHero";
import Support from "./components/Support";
import Countries from "./components/Countries";
import Contact from "./components/Contact";

const App = () => {
	return (
		<div className="w-full h-full min-h-screen font-primary">
			<Header />
			<Hero />
			<AfterHero />
			<Support />
			<Countries />
			<Contact />

			<footer className="w-full bg-green-900 text-white py-6 md:py-4">
				<section className="w-full ">
					<div className="w-full flex flex-col md:flex-row justify-between px-4 md:px-8 gap-y-4">
						<div>
							<p>
								© <a href="#">ACM</a> 2024 | All Rights Reserved
							</p>
						</div>

						<div>
							<ul className="flex gap-6 font-medium italic">
								<li className="underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300">
									<a href="#">Terms & Condition</a>
								</li>
								<li className="underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300">
									<a href="#">Privacy Policy</a>
								</li>
								<li className="underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300">
									<a href="#">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</footer>
		</div>
	);
};
export default App;
