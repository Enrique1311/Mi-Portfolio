import React from "react";
import NavLinks from "./NavLinks";
import "./MovileNav.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MovileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const menuIcon = (
		<AiOutlineMenu
			className="menu-icon"
			onClick={() => setOpenMenu(!openMenu)}
		/>
	);
	const closeIcon = (
		<AiOutlineClose
			className="menu-icon"
			onClick={() => setOpenMenu(!openMenu)}
		/>
	);
	const closeMovileNav = () => setOpenMenu(false);

	return (
		<nav className="movile-nav close-movile-nav">
			{openMenu ? closeIcon : menuIcon}
			{openMenu && (
				<NavLinks
					isMovileNav={true}
					closeMovileNav={closeMovileNav}
				/>
			)}
		</nav>
	);
};

export default MovileNav;
