import { AsyncPaginate } from "react-select-async-paginate";
import  { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";

export function Search({onSearchChange}:any) {

    const [search, setSearch] = useState(null);

    /**Esto es para Javascript, pero no funciona con Typescript por el tipado, entonces, utilizar la que utilicé abajo */
    // const loadOptions = (inputValue: string) => {
    //     return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    //     .then(response => response.json())
    //     .then(response => {
    //         return {
    //             options: response.data.map((city:any) => {
    //                 return {
    //                     label: `${city.name}, ${city.countryCode}`,
    //                     value: `${city.latitude} ${city.longitude}`,
    //                 };
    //             }),
    //         };
    //     })
        
    //     .catch(err => console.error(err));
        
    // }
    /**Utilizar esta que dice async function loadoption... */
    //await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);  Este es para delimitar la busqueda a ciudades con mas de 1 millon de habitantes
    async function loadOptions(inputValue: string) {
        const response = await fetch(`${GEO_API_URL}/cities?&namePrefix=${inputValue}`, geoApiOptions);
        const responseJSON = await response.json();
       
        return {
                options: responseJSON.data.map((city:any) => {
                    return {
                        label: `${city.name}, ${city.countryCode}`,
                        value: `${city.latitude} ${city.longitude}`,
                    };
                }),
                hasMore: responseJSON.has_more,
            };
        }
        
   
    const handleOnChange = (searchData:any) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }


  return (
    <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}

    />
  );
}