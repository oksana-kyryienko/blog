import { useContext } from 'react';
import { UserContext } from "../../../UserContext";
import "./ProfilePage.css";
export const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <h2 className="welcome-header">Welcome, {user ? user.name : 'Guest'}!</h2>
      {user && (
        <div className="user-details">
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};