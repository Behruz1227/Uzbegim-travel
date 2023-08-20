import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: "icons/grid.svg",
		},
		{
			text: "About us",
			icon: "icons/about.svg",
		},
		{
			text: "Our packegets",
			icon: "icons/collection.svg",
		},
		{
			text: "International tours",
			icon: "icons/houses.svg",
		},
		{
			text: "Serveces",
			icon: "icons/hdd-rack.svg",
		},
		{
			text: "Contact",
			icon: "icons/contact.svg",
		}
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="https://husniddinbek.pythonanywhere.com/media/product/2023/08/18/logo.jpg" alt=""/>
							<h2>O'ZBEGIM</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="https://husniddinbek.pythonanywhere.com/media/product/2023/08/18/logo.jpg"
							alt="."
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">O'zbegim Travel</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideNavBar;
