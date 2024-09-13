import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateLeaderBoard.css'; // Optional CSS for any custom styles


const CreateLeaderBoard = () => {
    // State to handle form inputs (optional)
    const [leaderboardName, setLeaderboardName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission here
        console.log(`Leaderboard Name: ${leaderboardName}, Description: ${description}`);
      };
    
  return (
    <div className="container mt-4">
      <h2>Welcome! Create Your Leaderboard</h2>

      <form onSubmit={handleSubmit}>
        {/* Name of Leaderboard */}
        <div className="form-group mb-3">
          <label htmlFor="leaderboardName">Name of Leaderboard</label>
          <input
            type="text"
            className="form-control"
            id="leaderboardName"
            value={leaderboardName}
            onChange={(e) => setLeaderboardName(e.target.value)}
            placeholder="Enter the leaderboard name"
            required
          />
        </div>

        {/* Description */}
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description"
            required
          ></textarea>
        </div>

        {/* Create Button */}
        <button type="submit" className="btn btn-primary">Create Leaderboard</button>
      </form>
    </div>
  );
};

export default CreateLeaderBoard;
