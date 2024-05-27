import Link from "next/link";

const AdminNavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-yellow font-roboto"
    >
      {title}
    </Link>
  );
};

export default AdminNavLink;
