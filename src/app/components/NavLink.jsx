import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-1 pl-3 pr-4 text-black rounded md:p-0 hover:text-yellow font-roboto"
    >
      {title}
    </Link>
  );
};

export default NavLink;
