// GroupManager.js
import React, { useState, useEffect } from "react";
import { ApiSdk } from "@bandada/api-sdk"; // Import the Bandada API SDK
import "../styles/GroupManager.css"; // Import CSS file for styling

const GroupManager = () => {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);

  // Create an instance of the Bandada API SDK
  const apiSdk = new ApiSdk();

  // Function to handle group creation
  const createGroup = async () => {
    try {
      // Call the API to create the group
      const newGroup = await apiSdk.createGroup(groupName);
      setGroups([...groups, newGroup]); // Update groups state with the newly created group
      setGroupName(""); // Clear input field after creating the group
    } catch (error) {
      console.error("Error creating group:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  // Function to retrieve the list of groups
  const fetchGroups = async () => {
    try {
      // Call the API to fetch the list of groups
      const fetchedGroups = await apiSdk.getGroups();
      setGroups(fetchedGroups); // Update groups state with the fetched groups
    } catch (error) {
      console.error("Error fetching groups:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  // Call fetchGroups when the component mounts to fetch initial data
  useEffect(() => {
    fetchGroups();
  }, []);

  // Function to render list of groups
  const renderGroups = () => {
    return groups.map((group, index) => (
      <div key={index} className="group">
        <h3>{group.name}</h3>
        <p>Group ID: {group.id}</p>
        {/* Add more information about the group as needed */}
      </div>
    ));
  };

  return (
    <div className="group-manager">
      <h2>Group Manager</h2>
      {/* Input field for entering group name */}
      <input
        type="text"
        placeholder="Enter group name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      {/* Button to create group */}
      <button onClick={createGroup}>Create Group</button>
      {/* Render list of groups */}
      <div className="groups">
        {groups.length > 0 ? renderGroups() : <p>No groups created yet.</p>}
      </div>
    </div>
  );
};

export default GroupManager;
