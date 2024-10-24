
import Link from "next/link";
import Header from "./component/Header";


export default function Countries(){
  
  return(
    <div>
      <Header />
<br />
<br />
 <h1 style={{fontSize:"50px",}}><b>Country List</b></h1>
 <br />
 <br />
 <br />
<Link href="/country/pakistan " style={{ margin: "10px", borderRadius: "10px", border: "2px solid white", padding: "10px" }}>Pakistan</Link>
<Link href="/country/india " style={{ margin: "10px", borderRadius: "10px", border: "2px solid white", padding: "10px" }}>India</Link>
<Link href="/country/china " style={{ margin: "10px", borderRadius: "10px", border: "2px solid white", padding: "10px" }}>China</Link>
<Link href="/country/japan " style={{ margin: "10px", borderRadius: "10px", border: "2px solid white", padding: "10px" }}>Japan</Link>
<Link href="/country/canada " style={{ margin: "10px", borderRadius: "10px", border: "2px solid white", padding: "10px" }}>Canada</Link>
    </div>
  )
}