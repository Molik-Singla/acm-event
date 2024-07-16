import AfterHeroImg from "./../assets/img.png";

import E1Img from "./../assets/e2.png";

const AfterHero = () => {
	return (
		<section className="w-full h-full min-h-screen flex relative justify-center items-center bg-gray-900 text-white px-4 md:px-8 pt-20 md:pt-0 pb-8">
			<img src={E1Img} alt="IMAGE" className="absolute top-14 left-8" />
			<section className="w-full max-w-7xl flex flex-col md:flex-row items-center">
				<section className=" w-full">
					<div className="flex flex-col md:flex-row w-full gap-y-8">
						<div className="w-full md:w-1/2 relative flex items-center">
							<div className="w-full h-full flex justify-center md:justify-start">
								<img
									className="w-[80%] md:w-auto md:h-full rounded-lg"
									src={AfterHeroImg}
									alt="img not found"
								/>
								<div className="hidden md:block absolute bg-green-900 rounded-lg right-[32%] -top-8 p-4">
									<h3 className="text-2xl font-bold">25</h3>
									<p>Years Of Experience</p>
								</div>
							</div>
						</div>

						<div className="w-full md:w-1/2 flex flex-col gap-8">
							<div>
								<h6 className="text-base font-medium italic mb-2">Why Choose Us</h6>
								<h2 className="text-3xl md:text-4xl font-bold">
									Experiencing Traditions Cultural Immersion
								</h2>
							</div>

							<div>
								<h4 className="text-lg md:text-2xl font-semibold">Marketing Services</h4>
								<p>
									Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed
									eu massa loren ipsum
								</p>
							</div>

							<div>
								<h4 className="text-lg md:text-2xl font-semibold">Marketing Services</h4>
								<p>
									Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed
									eu massa loren ipsum
								</p>
							</div>

							<div>
								<div>
									<a
										href="#"
										className="px-8 py-2 rounded-xl bg-green-900 flex justify-center text-white font-semibold max-w-fit"
									>
										Read More <i className="fa-solid fa-arrow-right"></i>
									</a>
								</div>

								<div className="mt-6">
									<div className="choose-us__button-text-icon">
										<i className="fa-solid fa-phone"></i>
									</div>

									<div className="flex items-center gap-0 flex-col max-w-fit">
										<h6 className="text-lg font-semibold">Need help?</h6>
										<a href="tel:9876543210">9876543210</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};
export default AfterHero;
