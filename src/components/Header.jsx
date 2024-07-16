// import LogoImg from "./../assets/logo.png";
import MenuImg from "./../assets/menu.png";

const Header = () => {
	return (
		<div>
			<header className="w-full flex h-16 bg-green-900 px-4 md:px-12 text-white">
				<div className="w-full h-full flex items-center justify-between">
					<div>
						<a href="index.html">
							{/* <img className="w-28" src={LogoImg} alt="logo not found" /> */}
							<p className="text-2xl font-mono font-semibold">Immigration Expert</p>
						</a>
					</div>

					<img src={MenuImg} alt="" className="md:hidden h-8" />
					<div className="text-lg hidden md:block">
						<nav>
							<ul className="flex items-center gap-8 font-medium">
								<li className="nav_item2">
									<a href="./">Home</a>
								</li>
								<li className="nav_item2">
									<a href="#">Services</a>
								</li>

								<li className="nav_item2">
									<a href="#">About Us</a>
								</li>
								<li className="nav_item2">
									<a href="#">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};
export default Header;
