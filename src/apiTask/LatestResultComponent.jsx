import React, { useEffect, useState } from 'react';

const LatestResultComponent = () => {
  const [latestResult, setLatestResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example API calls (replace with real APIs)
    const api1 = fetch('https://api.nationalize.io?name=nathaniel').then(res => res.json());
    const api2 = fetch('https://randomuser.me/api/').then(res => res.json());
    const api3 = fetch('https://api.zippopotam.us/us/33162').then(res => res.json());

    // Call getLatestResult with the array of API promises
    getLatestResult([api1, api2, api3])
      .then(result => {
        setLatestResult(result);  // Update the state with the last resolved API result
        setLoading(false);  // Set loading to false once the result is fetched
      })
      .catch(error => {
        setError(error);  // Handle errors if any API call fails
        setLoading(false);
      });
  }, []);

  // The function to handle multiple promises and return the latest result
  function getLatestResult(promises) {
    let latestResult;

    return Promise.all(promises.map(promise =>
      promise.then(response => {
        console.log({response})
        latestResult = response;
      })
    )).then(() => latestResult);
  }

  // Rendering logic based on loading, error, or successful data retrieval
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Latest API Result</h1>
      <pre>{JSON.stringify(latestResult, null, 2)}</pre>
    </div>
  );
};

export default LatestResultComponent;
