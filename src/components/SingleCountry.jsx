import CanadaImg from "./../assets/Flags/china.png";

const SingleCountry = ({ name, imgSrc }) => {
	return (
		<div className="bg-green-900 p-4 rounded-2xl w-full">
			<div className="w-full flex justify-center relative">
				<img className="w-32 rounded-full h-32 absolute -top-16" src={imgSrc} alt="img not found" />
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
