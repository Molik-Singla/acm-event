import SingleSupportCard from "./SingleSupportCard";

import Img1 from "./../assets/m1.png";
import Img2 from "./../assets/m2.png";
import Img3 from "./../assets/m3.png";
import Img4 from "./../assets/m4.png";

const Support = () => {
	return (
		<section className="w-full h-full min-h-screen flex justify-center items-center pt-20 bg-gray-900 text-white px-4 md:px-8 pb-6">
			<section className="w-full max-w-7xl flex flex-col md:flex-row items-center">
				<section className="w-full">
					<div className="w-full">
						<div className="w-full">
							<div className="w-full">
								<div className="flex flex-col items-center">
									<h6 className="text-base font-medium italic mb-2">Coaching support</h6>
									<h2 className=" text-3xl md:text-4xl font-bold text-center">
										Nature s Playground Exploring the Great
									</h2>
								</div>
							</div>
							<div className="w-full flex flex-col gap-8 items-center mt-2 md:mt-12">
								<div className="flex flex-col md:flex-row md:gap-16 gap-24 mt-28">
									<SingleSupportCard imgSrc={Img1} />
									<SingleSupportCard imgSrc={Img2} />
									<SingleSupportCard imgSrc={Img3} />
									<SingleSupportCard imgSrc={Img4} />
								</div>

								<div className="my-6 cursor-pointer underline underline-offset-8 hover:text-green-700 hover:scale-110 duration-300 transition-all">
									<a href="#">All Courses</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};
export default Support;
