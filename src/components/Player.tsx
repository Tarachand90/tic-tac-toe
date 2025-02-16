import React, { useState } from "react";
import { PlayerSymbol } from "./PlayerSymbol";

interface PlayerProps {
  name: string; // The player's name.
  symbol: PlayerSymbol;
  isActive: boolean; // Indicates whether the player is currently active.
}

const Player = ({ name, symbol, isActive }: PlayerProps) => {
  //Manages whether the player name is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Stores the player's name (which can be edited).
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  let editiablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editiablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editiablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
