import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [displayData, setDisplayData] = useState();

  async function getScrapedData() {
    const scrapedResponse = await axios.get("http://localhost:8000/api/scrape");
    console.log(scrapedResponse.data);
    setDisplayData(scrapedResponse.data);
  }
  useEffect(() => {
    getScrapedData();
  }, []);

  return (
    <>
      <p>{displayData}</p>
    </>
  );
};

export default About;
