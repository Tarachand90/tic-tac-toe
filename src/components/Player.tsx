import { useState } from "react";

interface PlayerProps {
  name: string;
  symbol: string;
}

const Player = ({ name, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const editingMsg = !isEditing ? "Edit" : "Save";
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editingMsg}</button>
    </li>
  );
};

export default Player;
