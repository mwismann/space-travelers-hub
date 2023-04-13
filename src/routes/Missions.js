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
          <table className="table-auto border-collapse border border-slate-400 mt-5 w-5/6 m-auto">
            <tr className="border">
              <th className="border">Mission</th>
              <th className="border">Description</th>
              <th className="broder">Status</th>
              <th>{' '}</th>
            </tr>
            {
              missions.map((mission) => (
                <tr key={mission.mission_id} className="border">
                  <th className="border">{mission.mission_name}</th>
                  <td className="border">{mission.description}</td>
                  {
                    mission.reserved
                      ? <td className="border">Active Member</td>
                      : <td className="border">NOT A MEMBER</td>
                  }
                  {
                    mission.reserved
                      ? (
                        <td className="border">
                          <button type="button" onClick={() => dispatch(reserveToggle(mission.mission_id))}>Leave Mission</button>
                        </td>
                      )
                      : <td className="border"><button type="button" onClick={() => dispatch(reserveToggle(mission.mission_id))}>Join Mission</button></td>
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
