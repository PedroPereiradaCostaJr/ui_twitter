import { NavLink } from "react-router-dom";
import twitterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>List</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
      <div className="my-3">
				<div className="flex items-center p-3">
					<img
						src="https://github.com/pedropereiradacostajr.png"
						alt=""
						className="w-10 h-10 rounded-full"
					/>
					<div className="flex flex-col mx-3">
						<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700">
							<a
								href="https://github.com/pedropereiradacostajr"
								target="_blank"
								className="font-black hover:text-lg transition-all"
                rel="noopener"
							>
								{" "}
								PPereiraDev
							</a>
						</h1>
						<h2 className="font-normal text-neutral-600">
							@PedroPereira
						</h2>
					</div>
				</div>
        </div>
    </aside>
  );
}
