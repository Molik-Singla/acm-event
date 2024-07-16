import CanadaImg from "./../assets/Flags/china.png";

const SingleCountry = ({ name, imgSrc }) => {
	return (
		<div className="bg-green-900 p-4 rounded-2xl w-full hover:scale-110 duration-300 transition-all hover:rotate-1 group">
			<div className="w-full flex justify-center relative">
				<img
					className="w-32 rounded-full h-32 absolute -top-16 group-hover:rotate-[360deg] transition-all duration-[1.5s]"
					src={imgSrc}
					alt="img not found"
				/>
			</div>
			<div className="flex flex-col items-center mt-20">
				<h3 className="text-xl font-semibold">{name}</h3>
				<div className="mt-4">
					<ul className="list-disc">
						<li>
							<i className="fa-solid fa-check"></i>Mistakes To Avoid
						</li>
						<li>
							<i className="fa-solid fa-check"></i>Your Startup
						</li>
						<li>
							<i className="fa-solid fa-check"></i>Knew About Fonts
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SingleCountry;
