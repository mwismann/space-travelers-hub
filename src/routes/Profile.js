import { useSelector } from 'react-redux';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div>
      <div>
        <h2>Reserved Rockets</h2>
        <ul>
          {rockets.filter((rocket) => rocket.isReserved === true).map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
