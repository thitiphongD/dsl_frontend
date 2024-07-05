import Link from "next/link";
import Image from "next/image";

const HorizontalNavbar: React.FC = () => {
  return (
    <nav className="flex-center gap-10 border-b border-[#343434] p-2">
      <div className="flex-center gap-2">
        <Image
          src="/favicon.ico"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <span>DSL</span>
      </div>

      <div className="flex-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
