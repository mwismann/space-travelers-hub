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
                const trColor = index % 2 === 0 ? 'bg-[#f2f2f2]' : '';
                const trClass = `border ${trColor}`;
                return (
                  <tr key={mission.mission_id} className={trClass}>
                    <th className="border px-2 py-4 text-left align-top">{mission.mission_name}</th>
                    <td className="border px-6 py-4 text-sm font-normal align-top">{mission.description}</td>
                    {
                    mission.reserved
                      ? <td className="border px-3 py-4 whitespace-nowrap text-xs text-white font-medium"><p className="bg-[#18a2b8] px-2 py-1 align-center rounded">Active Member</p></td>
                      : <td className="border px-3 py-4 whitespace-nowrap text-xs text-white font-medium"><p className="bg-[#6d757d] px-2 py-1 aling-center rounded">NOT A MEMBER</p></td>
                  }
                    {
                    mission.reserved
                      ? (
                        <td className="border px-6 py-4 whitespace-nowrap text-sm">
                          <button type="button" className="border border-red-600 text-red-600 font-medium px-4 py-2 rounded-md" onClick={() => dispatch(reserveToggle(mission.mission_id))}>Leave Mission</button>
                        </td>
                      )
                      : <td className="border px-6 py-4 whitespace-nowrap text-sm"><button type="button" className="border border-gray-900 px-4 py-2 rounded-md" onClick={() => dispatch(reserveToggle(mission.mission_id))}>Join Mission</button></td>
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
