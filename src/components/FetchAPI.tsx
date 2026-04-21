// simply api fetch garney tarika

// import { useEffect, useState } from "react";

// const FetchAPI = () => {

//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     try {
//       const url = "https://restcountries.com/v3.1/name/nepal";
//       const response = await fetch(url);
//       const result = await response.json();

//       setData(result);
//     } catch (error) {
//       console.log("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div>
//       <h1>Country Info</h1>

//       {data && (
//         <div>
//           <h2>{data[0].name.common}</h2>
//           <p>Capital: {data[0].capital[0]}</p>
//           <img src={data[0].flags.png} alt="flag" />

//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchAPI;

// Submit button  use gareyera API call gareyera data fetch garda

import { useState } from "react";

const CountryApp = () => {
  const [country, setCountry] = useState(""); //user ley select gareyko country store garna
  const [data, setData] = useState(null); // API bata ayera data yesma basalna
  const [loading, setLoading] = useState(false); // api call hudai xa vaneyra dekhauna

  const countries = ["nepal", "india", "japan", "usa"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!country) {
      alert("Plese select a country");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const result = await res.json();

      console.log(result);
      setData(result[0]);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-6">🌍 Country Info</h1>

      {/* 🔹 Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 bg-gray-800 p-4 rounded-xl shadow-lg"
      >
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none"
        >
          <option value="">Select Country</option>
          {countries.map((c, index) => (
            <option key={index} value={c}>
              {c.toUpperCase()}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
        >
          Search
        </button>
      </form>

      {/* 🔹 Loading */}
      {loading && <h2 className="mt-6 text-xl animate-pulse">Loading...</h2>}

      {/* 🔹 Result Card */}
      {data && !loading && (
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-xl w-80 text-center">
          <img
            src={data.flags.png}
            alt="flag"
            className="w-24 mx-auto mb-4 rounded"
          />

          <h2 className="text-2xl font-bold">{data.name.common}</h2>

          <p className="mt-2">Capital: {data.capital[0]}</p>
          <p>Region: {data.region}</p>
          <p>Population: {data.population.toLocaleString()}</p>

          <a
            href={data.maps.googleMaps}
            target="_blank"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
          >
            View Map
          </a>
        </div>
      )}
    </div>
  );
};

export default CountryApp;

// useEffect use gareyara data fetch garda

// import { useEffect, useState } from "react";

// const FetchAPI = () => {

//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [country, setCountry] = useState("nepal"); // default

//   useEffect(() => {
//     getData();
//   }, [country]); // 👈 change: runs when country changes

//   async function getData() {
//     try {
//       setLoading(true);

//       const url = `https://restcountries.com/v3.1/name/${country}`;
//       const response = await fetch(url);
//       const result = await response.json();

//       setData(result);
//     } catch (error) {
//       console.log("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <h1>Country Info</h1>

//       {/* 🔹 Simple Dropdown */}
//       <select onChange={(e) => setCountry(e.target.value)}>
//         <option value="nepal">Nepal</option>
//         <option value="india">India</option>
//         <option value="japan">Japan</option>
//         <option value="usa">USA</option>
//       </select>

//       {/* 🔹 Loading */}
//       {loading && <h2>Loading...</h2>}

//       {/* 🔹 Data */}
//       {data && !loading && (
//         <div>
//           <h2>{data[0].name.common}</h2>
//           <p>Capital: {data[0].capital[0]}</p>
//           <img src={data[0].flags.png} alt="flag" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchAPI;
