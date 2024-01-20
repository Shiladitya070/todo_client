import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 bg-gray-800 text-white">
            <div className="flex justify-center space-x-4 py-4">
                <Link href={"/"} className="text-2xl font-bold">Todo .com</Link>
            </div>
        </nav>
    );
};

export default Navbar;
