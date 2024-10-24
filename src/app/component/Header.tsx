import Link from "next/link"

 
 export default function Header(){
    return(
        <div>
        <ul className="flex gap-10 bg-blue-600">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact-us">Contact us</Link></li>
        <li><Link href="/">Country</Link></li>

      
      </ul>
</div>    )
}