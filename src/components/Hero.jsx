import HeroImg from "./../assets/hero.png";
import BgImg from "./../assets/bg.png";

const Hero = () => {
	return (
		<section
			className="w-full h-full min-h-screen flex justify-center items-center bg-gray-900 text-white"
			style={{
				backgroundImage: `url(${BgImg})`,
			}}
		>
			<section className="w-full h-full min-h-screen flex justify-center items-center bg-[rgba(0,0,0,0.7)]">
				<section className="w-full max-w-7xl flex flex-col md:flex-row items-center px-4 md:px-8 gap-y-16">
					<div className="flex flex-col gap-5 w-full md:w-1/2 justify-center h-full relative md:-top-4">
						<div>
							<h6 className="font-medium italic text-lg">Relax Travel</h6>
							<h1 className="text-3xl mt-3 md:text-5xl font-bold leading-[46px]">
								Visa Immigration for a Brighter You Future
							</h1>
						</div>
						<a
							href="#"
							className="px-8 py-2 rounded-md flex mt-4 md:mt-8 justify-center bg-green-900 text-white max-w-fit hover:scale-105 transition-all duration-300 font-semibold"
						>
							Contact Us <i className="fa-solid fa-arrow-right"></i>
						</a>
					</div>

					<div className="w-full md:w-1/2 flex justify-center items-center">
						<img className="w-[80%] md:w-[50%] rounded-xl" src={HeroImg} alt="" />
					</div>
				</section>
			</section>
		</section>
	);
};
export default Hero;
