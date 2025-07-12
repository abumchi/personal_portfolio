import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex bg-amber-900 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1 className=" ">this is the first day and God is helping me</h1>
      <Link href="/contact" >Contact_Us</Link>
    </div>
  );
}
