import ContactImg from "./../assets/contact.png";
import E3 from "./../assets/e3.png";

const Contact = () => {
	return (
		<section
			className="w-full h-full min-h-screen flex justify-center items-center pt-20 bg-gray-900 text-white px-4 md:px-8 pb-20 md:pb-20"
			style={{
				backgroundImage: `url(${E3})`,
				backgroundSize: "contain",
				backgroundPosition: "center",
			}}
		>
			<section className="w-full h-full min-h-screen flex justify-center items-center bg-[rgba(0,0,0,0.7)]">
				<section className="w-full max-w-7xl flex flex-col md:flex-row items-center">
					<section className="w-full">
						<div>
							<div>
								<div>
									<div>
										<div>
											<div className="w-full flex flex-col items-center">
												<h6 className="text-base font-medium italic mb-1">Ticket Booking</h6>
												<h2 className=" text-3xl text-center md:text-4xl font-bold">
													Book Your Consultation
												</h2>
											</div>

											<section className="flex mt-20 flex-col-reverse md:flex-row	gap-y-16">
												<section className="w-full md:w-1/2 flex flex-col gap-4 items-center justify-center">
													<div className="flex flex-col gap-4 w-[80%] text-xl">
														<div className="w-full gap-4 flex flex-col">
															<div className="flex gap-3 items-center w-[100%] justify-between">
																<label>From</label>
																<select className="w-1/2 rounded-lg px-4 py-1 bg-white/60 outline-none">
																	<option>India</option>
																</select>
															</div>

															<div className="flex gap-3 items-center w-[100%] justify-between">
																<label>To</label>
																<select className="w-1/2 rounded-lg px-4 py-1 bg-white/60 outline-none">
																	<option>India</option>
																</select>
															</div>
														</div>

														<div className="w-full flex flex-col gap-4">
															<div className="flex gap-3 items-center w-[100%] justify-between">
																<label>Date</label>
																<input
																	className="w-1/2 rounded-lg px-4 py-1 bg-white/60 outline-none"
																	type="date"
																/>
															</div>

															<div className="flex gap-3 items-center w-[100%] justify-between">
																<label>Passenger</label>
																<input
																	className="w-1/2 rounded-lg px-4 py-1 bg-white/60 outline-none placeholder:text-white"
																	type="number"
																	placeholder="Passenger"
																/>
															</div>
														</div>

														<div className="w-full flex justify-center">
															<button className="px-8 text-lg py-2 rounded-md flex mt-8 justify-center bg-green-900 text-white max-w-fit hover:scale-105 transition-all duration-300 font-semibold">
																Book Now
															</button>
														</div>
													</div>
												</section>

												<div className="w-full h-[60vh] md:w-1/2 flex justify-center">
													<img
														className="h-full rounded-xl"
														src={ContactImg}
														alt="img not found"
													/>
												</div>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</section>
		</section>
	);
};
export default Contact;
