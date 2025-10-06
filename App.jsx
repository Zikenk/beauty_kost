export default import { useEffect, useState } from "react";

function App() {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    async function fetchSalons() {
      const response = await fetch(
        "https://catalog.api.2gis.com/3.0/items?q=beauty salon&region_id=391010000&key=18bae74f-5658-4bc6-bb59-c0117c648f49"
      );
      const data = await response.json();
      console.log(data); // See what comes back
    }

    fetchSalons();
  }, []);
  
  return (
    <div>
      <h1>Beauty Directory</h1>
      {/* We'll display salons here later */}
    </div>
    
  );
}

