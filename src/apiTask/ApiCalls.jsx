import React, { useState, useEffect } from "react";

const ApiCalls = () => {
  const [fastestApiData, setFastestApiData] = useState(null);
  const [slowestApiData, setSlowestApiData] = useState(null);
  const [fastestApiName, setFastestApiName] = useState(null);
  const [slowestApiName, setSlowestApiName] = useState(null);
  const [loading, setLoading] = useState(true);

  // Wrapper to simulate delay
  const delayFetch = (url, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch(url));
      }, delay);
    });
  };

  useEffect(() => {
    const fetchApis = () => {
      const apiCalls = [
        { name: "API 2", call: fetch("https://api.nationalize.io?name=nathaniel") },
        { name: "API 3", call: fetch("https://randomuser.me/api/") },
        { name: "API 1", call: fetch("https://api.zippopotam.us/us/33162") },
      ];

      const startTimes = {};

      const promises = apiCalls.map(({ name, call }) => {
        startTimes[name] = Date.now();
        console.log({startTimes})
        return call
          .then((response) => response.json())
          .then((data) => ({
            name,
            data,
            duration: Date.now() - startTimes[name],
          }))
          .catch((error) => ({
            name,
            error: error.message,
            duration: Date.now() - startTimes[name],
          }));
      });

      // Handle all promises with Promise.all
      Promise.all(promises)
        .then((results) => {
          results.forEach(({ name, duration }) => {
            console.log(`${name} completed in ${duration} ms`);
          });

          // Find the fastest and slowest APIs
          const fastest = results.reduce((min, current) =>
            min.duration < current.duration ? min : current
          );

          const slowest = results.reduce((max, current) =>
            max.duration > current.duration ? max : current
          );

          // Set the state for the fastest and slowest API details
          setFastestApiData(fastest.data);
          setFastestApiName(fastest.name);
          setSlowestApiData(slowest.data);
          setSlowestApiName(slowest.name);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching APIs:", error);
          setLoading(false);
        });
    };

    fetchApis();
  }, []);

  return (
    <div>
      <h1>API Response Times</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Fastest API</h2>
          <p><strong>{fastestApiName}</strong> took the least time</p>
          <pre>{fastestApiData ? JSON.stringify(fastestApiData, null, 2) : "No data available"}</pre>

          <h2>Slowest API</h2>
          <p><strong>{slowestApiName}</strong> took the longest time</p>
          <pre>{slowestApiData ? JSON.stringify(slowestApiData, null, 2) : "No data available"}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiCalls;
