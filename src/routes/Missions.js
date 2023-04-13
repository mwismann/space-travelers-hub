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
              <th className="border text-left px-6 py-4">Mission</th>
              <th className="border text-left">Description</th>
              <th className="broder text-left">Status</th>
              <th>{' '}</th>
            </tr>
            {
              missions.map((mission, index) => {
                const trColor = index % 2 === 0 ? 'bg-gray-200' : '';
                const trClass = `border ${trColor}`;
                return (
                  <tr key={mission.mission_id} className={trClass}>
                    <th className="border px-2 py-4 text-left">{mission.mission_name}</th>
                    <td className="border px-6 py-4 text-sm font-normal">{mission.description}</td>
                    {
                    mission.reserved
                      ? <td className="border px-3 py-4 whitespace-nowrap text-sm font-normal">Active Member</td>
                      : <td className="border px-3 py-4 whitespace-nowrap text-sm font-normal"><p className="bg-gray-300">NOT A MEMBER</p></td>
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
                );
              })
            }
          </table>
        )
      }
    </div>
  );
};

export default Missions;
