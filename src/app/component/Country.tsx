

export default function Country(data:any) {
    return (
      <div>
    
{data.countrydetail ? (
    <div>
<h1 style={{fontSize:"25px", marginTop:"50px"}} >Country Name :{data.countrydetail.name}</h1>
<h1 style={{fontSize:"25px" }}>Country Name :{data.countrydetail.population}</h1>
<h1 style={{fontSize:"25px"}}>Country Name :{data.countrydetail.capital}</h1>
    </div>
):(
    <div>
<h1  style={{fontSize:'30px', marginTop:"10px"}}>{data.url} Not Found</h1>
    </div>
)
}
      </div>
    )
}