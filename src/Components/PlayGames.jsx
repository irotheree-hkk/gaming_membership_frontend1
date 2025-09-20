import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayGames.css";

const PlayGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      name: "Chess",
      price: 50,
      description: "Strategic board game for 2 players",
      players: "2 players",
      image: "♟️"
    },
    {
      id: 2,
      name: "Carrom",
      price: 100,
      description: "Traditional Indian board game",
      players: "2-4 players",
      image: "🎯"
    },
    {
      id: 3,
      name: "Foosball",
      price: 150,
      description: "Table football game",
      players: "2-4 players",
      image: "⚽"
    },
    {
      id: 4,
      name: "Pool",
      price: 200,
      description: "Billiards game",
      players: "2-8 players",
      image: "🎱"
    },
    {
      id: 5,
      name: "Ping Pong",
      price: 80,
      description: "Table tennis",
      players: "2-4 players",
      image: "🏓"
    },
    {
      id: 6,
      name: "Darts",
      price: 60,
      description: "Target throwing game",
      players: "1-8 players",
      image: "🎯"
    }
  ];

  const handlePlayGame = (game) => {
    setSelectedGame(game);
  };

  const handleBack = () => {
    navigate("/member/dashboard");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="play-games-container">
      <header className="play-games-header">
        <div className="header-content">
          <button className="back-btn" onClick={handleBack}>
            ← Back to Dashboard
          </button>
          <div className="header-title">
            <span className="header-icon">🎮</span>
            <h1>Play Games</h1>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="play-games-main">
        <div className="games-section">
          <h2>Available Games</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-image">{game.image}</div>
                <h3>{game.name}</h3>
                <p className="game-description">{game.description}</p>
                <p className="game-players">{game.players}</p>
                <p className="game-price">₹{game.price}</p>
                <button 
                  className="play-btn"
                  onClick={() => handlePlayGame(game)}
                >
                  Play Game
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedGame && (
          <div className="game-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>🎮 {selectedGame.name}</h2>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedGame(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="game-details">
                  <div className="detail-item">
                    <strong>Description:</strong> {selectedGame.description}
                  </div>
                  <div className="detail-item">
                    <strong>Players:</strong> {selectedGame.players}
                  </div>
                  <div className="detail-item">
                    <strong>Price:</strong> ₹{selectedGame.price}
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="confirm-play-btn">
                    Confirm & Play
                  </button>
                  <button 
                    className="cancel-btn"
                    onClick={() => setSelectedGame(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="play-games-footer">
        © 2025 Gaming Club. All rights reserved.
      </footer>
    </div>
  );
};

export default PlayGames; 