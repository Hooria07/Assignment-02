import Country from "@/app/component/Country";
import Header from "@/app/component/Header";
import Link from "next/link";

export default function CountryName({ params }: any) {

    const countries: { 
      name: string;
      population: number;
      capital: string;
    }[] = [
      {
        name: "Pakistan",
        population: 241492197,
        capital: "Islamabad",
      },
      {
        name: "India",
        population: 1454709408,
        capital: "Delhi",
      },
      {
        name: "China",
        population: 1418374740,
        capital: "Beijing",
      }, {
        name: "Canada",
        population: 38232593,
        capital: "Ottawa",
      },
      {
        name: "Japan",
        population: 123753041,
        capital: "Tokyo",
      },
    ];
  
  
    function findCountry(country_url:string){
          return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
    }
  
    let result = findCountry(params.country_name);
  
    return (
      <div>
        <Header />
        <Country  countrydetail={result} url={params.country_name}/>
         <div>
          <li className="button">
            <Link className="" href="/">Back</Link>
          </li>
         </div>
      </div>
    );
  }