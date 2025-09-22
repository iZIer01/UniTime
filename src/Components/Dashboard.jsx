import React, { useEffect, useState } from "react";

function Dashboard() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8888/api/roles", {
      method: "GET",
      credentials: "include", 
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch roles");
        return res.json();
      })
      .then((data) => {
        setRoles(data); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Roles from UniTime:</h2>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{JSON.stringify(role)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
