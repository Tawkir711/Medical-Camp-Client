import React from "react";

const OrganizerProfile = ({ organizer }) => {
  const handleUpdateContactInfo = () => {
    // Logic to handle contact info update
  };

  const handleUpdatePreferences = () => {
    // Logic to handle preferences update
  };

  return (
    <div>
      <h2>Organizer Profile</h2>
      <div className="organizer-details">
        <h3>Contact Details</h3>
        <p>Name: {}</p>
        <p>Email: </p>
        <p>Phone:</p>
        <button onClick={handleUpdateContactInfo}>Update Contact Info</button>

        <h3>Preferences</h3>
        <p>Notification Preferences: </p>
        <p>Event Preferences: </p>
        <button onClick={handleUpdatePreferences}>Update Preferences</button>
      </div>

      <div className="organizer-impact">
        <h3>Organizer's Impact</h3>
        <h4>Organized Camps</h4>
        <ul>
          {/* {.organizedCamps.map((camp, index) => (
            <li key={index}>{camp}</li>
          ))} */}
        </ul>

        <h4>Success Stories</h4>
        <p></p>

        <h4>Participant Feedback</h4>
        <p></p>
      </div>
    </div>
  );
};

export default OrganizerProfile;
