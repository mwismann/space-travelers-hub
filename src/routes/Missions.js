import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissons, reserveToggle } from '../redux/missions/missionSlice';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissons());
  }, [dispatch]);

  return (
    <div className="missions">
      {
        isLoading
        && <div>Loading...</div>
      }
      {
        error
        && <div>Error</div>
      }
      {
        missions
        && (
          <table>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{' '}</th>
            </tr>
            {
              missions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                  <td>{mission.description}</td>
                  {
                    mission.reserved
                      ? <td className="active-member-text">Active Member</td>
                      : <td className="active-member-text">NOT A MEMBER</td>
                  }
                  {
                    mission.reserved
                      ? (
                        <td className="active-member-button">
                          <button type="button" onClick={() => dispatch(reserveToggle(mission.mission_id))}>Reserved</button>
                        </td>
                      )
                      : <button type="button" onClick={() => dispatch(reserveToggle(mission.mission_id))}>Reserve</button>
                  }
                </tr>
              ))
            }
          </table>
        )
      }
    </div>
  );
};

export default Missions;
