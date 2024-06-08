import Link from "next/link";

const HeroNavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-1 pl-3 pr-4 text-white rounded md:p-0 hover:text-[#F57D1F] font-semibold font-roboto"
    >
      {title}
    </Link>
  );
};

export default HeroNavLink;
