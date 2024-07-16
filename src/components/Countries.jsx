import SingleCountry from "./SingleCountry";

import Country1 from "./../assets/Flags/china.png";
import Country2 from "./../assets/Flags/australia.png";
import Country3 from "./../assets/Flags/united-states.png";
import Country4 from "./../assets/Flags/germany.png";

const Countries = () => {
	return (
		<section className="w-full h-full min-h-screen flex justify-center items-center pt-20 bg-gray-900 text-white px-4 md:px-8 pb-8">
			<section className="w-full max-w-7xl flex flex-col md:flex-row items-center">
				<section className="w-full">
					<div className="w-full flex flex-col gap-8">
						<div className="w-full flex flex-col items-center">
							<div className="flex flex-col items-center">
								<span className="text-base font-medium italic mb-1">Available Countries</span>
								<h2 className=" text-3xl text-center md:text-3xl font-bold">
									Urban Escapes City Hopping Adventures
								</h2>
							</div>

							<div className="mt-4">
								<a
									href="#"
									className="my-6 cursor-pointer underline underline-offset-8 hover:text-green-700 hover:scale-110 duration-300 transition-all"
								>
									View More <i className="fa-solid fa-arrow-right"></i>
								</a>
							</div>
						</div>

						<div className="w-full flex flex-col md:flex-row justify-evenly gap-24 md:gap-16 mt-28">
							<SingleCountry name={"Canada"} imgSrc={Country1} />
							<SingleCountry name={"Bangladesh"} imgSrc={Country3} />
							<SingleCountry name={"Australia"} imgSrc={Country2} />
							<SingleCountry name={"UK"} imgSrc={Country4} />
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};
export default Countries;
