import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRockets from '../redux/rockets/actions';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const {
    rockets, isLoading, isSuccess, error,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      return;
    }
    dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-container">
      {isLoading && <div>Loading...</div>}
      {error && <div>Upss! Something went wrong...</div>}
      <ul className="my-4 flex flex-col gap-6">
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
