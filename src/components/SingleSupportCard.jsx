const SingleSupportCard = ({ imgSrc }) => {
	return (
		<div className="bg-green-900 p-4 rounded-2xl">
			<div className="w-full flex flex-col items-center gap-4">
				<div className="w-full flex justify-center relative">
					<img className="w-36 rounded-full h-36 absolute -top-16" src={imgSrc} alt="img not found" />
				</div>
				<div className="flex flex-col items-center mt-24">
					<h4 className="text-xl font-semibold">Dualugo Coaching</h4>
					<p className="text-center mt-1">There are many variati of passages of engineer</p>
					<a
						href="#"
						className="px-8 py-2 rounded-xl bg-transparent border-white border flex justify-center text-white font-semibold max-w-fit mt-7 hover:scale-105 transition-all duration-300"
					>
						Read More
						<i className="fa-solid fa-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>
	);
};
export default SingleSupportCard;
