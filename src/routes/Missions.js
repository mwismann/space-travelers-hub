import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissons } from '../redux/missions/missionSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissons());
  }, [dispatch]);

  return (
    <div>{JSON.stringify(missions)}</div>
  );
};

export default Missions;
