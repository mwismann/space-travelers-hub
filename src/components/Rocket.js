import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';
import Badge from './Badge';

const Rocket = ({
  id, name, description, img, isReserved,
}) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <img src={img} alt="Rocket" />
      </div>
      <div>
        <h2>{name}</h2>
        <div>
          {isReserved && <Badge />}
          <p>{description}</p>
        </div>
        {(isReserved
          ? (
            <button
              type="button"
              onClick={() => dispatch(cancelReservation(id))}
            >
              Cancel Reservation
            </button>
          )
          : (
            <button
              type="button"
              onClick={() => dispatch(reserveRocket(id))}
            >
              Reserve Rocket
            </button>
          ))}
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default Rocket;
