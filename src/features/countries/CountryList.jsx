// import { List } from "../../components/List";
// import { Card } from "../../components/Card";
// import { useNavigate } from "react-router-dom";
// import { useCountries } from "./useCountries";

// const CountryList = () => {
//   const navigate = useNavigate();
//   const [countries, { error, status }] = useCountries();

//   console.log("state.countries.list:", countries);

//   return (
//     <>
//       {error && <h2>Can't fetch data</h2>}
//       {status === "loading" && <h2>Loading...</h2>}

//       {status === "received" && (
//         <List>
//           {countries.map((c) => {
//             const countryInfo = {
//               img: c.logo,
//               name: c.name,
//             };

//             return (
//               <Card
//                 key={c.name}
//                 onClick={() => navigate(`/country/${c.name}`)}
//                 {...countryInfo}
//               />
//             );
//           })}
//         </List>
//       )}
//     </>
//   );
// };

// export { CountryList };

import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { useCountries } from "./useCountries";

const CountryList = () => {
  const [countries, { error, status }] = useCountries();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}

      {status === "received" && (
        <List>
          {countries.map((item) => {
            const info = {
              logo: item.logo,
              name: item.name,
              id: item.id,
              info: [
                {
                  title: "Description",
                  description: item.description,
                },
                // {
                //   title: "Status",
                //   description: item.isActive ? "Active" : "Inactive",
                // },
              ],
            };

            return <Card key={item.id} {...info} />;
          })}
        </List>
      )}
    </>
  );
};

export { CountryList };
