import { useEffect, useState } from "react";

function App() {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
  async function fetchSalons() {
    const response = await fetch(
      "https://catalog.api.2gis.com/3.0/items?q=beauty salon&region_id=391010000&key=18bae74f-5658-4bc6-bb59-c0117c648f49"
    );
    const data = await response.json();
    console.log("Full API response:", data); // Inspect this in the browser console
    if (data.result && data.result.items) {
      setSalons(data.result.items);
    } else {
      console.warn("No items found in API response");
    }
  }

  fetchSalons();
}, []);


  return (
    <div>
      <h1>Beauty Directory</h1>

      <div className="card-grid">
        {salons.map((salon) => (
          <div className="card" key={salon.id}>
            <h3>{salon.name}</h3>
            <p>{salon.address_name}</p>
            <p>{salon.rubrics?.[0]?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
