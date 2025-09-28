import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href={"/"}>
        <div className="flex items-center gap-2.5 cursor-pointer">
            <Image src="/images/logo.svg" width={46} height={44} alt={"logo"} />
        </div>
       </Link>
       <div className="flex items-center gap-8">
            <p>Home</p>
            <p>Companions</p>
            <p>My Journey</p>
            <p>sign in</p>
       </div>
    </nav>
  )
}

export default Navbar
