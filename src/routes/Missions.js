import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissons } from '../redux/missions/missionSlice';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissons());
  }, [dispatch]);

  return (
    <div>
      {
        isLoading
        && <div>Loading...</div>
      }
      {
        error
        && <div>Error</div>
      }
      <div>
        {
          missions
          && (
          <div>
            {' '}
            {
            missions.map((mission) => (
              <div key={mission.mission_id}>
                <p>{mission.mission_name}</p>
                <p>{mission.description}</p>
              </div>
            ))
          }
            {' '}

          </div>
          )
        }
      </div>
    </div>
  );
};

export default Missions;
