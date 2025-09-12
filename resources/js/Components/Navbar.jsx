const Navbar = () => {
    return (
        <section className="bg-white sticky w-full top-0 z-[1000]">
            <div className="container px-20 flex justify-between items-center mx-auto p-4">

                <a href="#">
                    <img className="w-[150px]" src="./images/logo.png"></img>
                </a>

                <ul className="flex gap-8 font-semibold tracking-wide text-xl text-gray-800">
                    <li><a className="hover:underline" href="#">Home</a></li>
                    <li><a className="hover:underline" href="#">Articles</a></li>
                    <li><a className="hover:underline" href="#">Blogs</a></li>
                    <li><a className="hover:underline" href="#">About Us</a></li>
                </ul>

                <div className="flex justify-center items-center gap-6 text-xl font-semibold tracking-wide">
                    <a className="text-gray-800" href="">Sign In</a>
                    <a className="text-white bg-[#E6C558] px-6 py-2 rounded-full" href="">Sign Up</a>
                </div>

            </div>
        </section>
    );
};

export default Navbar;
