import { useSelector } from 'react-redux';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="container w-11/12 mt-4 mx-auto flex justify-between">
      <div>
        <h2>My Missions</h2>
        <ul>
          {missions.filter((mission) => mission.reserved === true).map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl font-medium">My Rockets</h2>
        <ul className="mt-2 border rounded">
          {rockets.filter((rocket) => rocket.isReserved === true).map((rocket) => (
            <li key={rocket.id} className="h-16 pt-3 pl-6 font-medium border-b last:border-b-0">{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
