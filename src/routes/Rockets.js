import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRockets from '../redux/rockets/actions';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-container">
      {isLoading && <div>Loading...</div>}
      {error && <div>Upss! Something went wrong...</div>}
      <ul>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            img={rocket.flickr_images}
            isReserved={rocket.isReserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
