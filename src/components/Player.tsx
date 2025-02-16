import { useState } from "react";

interface PlayerProps {
  name: string;
  symbol: string;
}

const Player = ({ name, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required />;
    btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
