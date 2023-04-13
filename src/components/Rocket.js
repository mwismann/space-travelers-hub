import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';
import Badge from './Badge';

const Rocket = ({
  id, name, description, img, isReserved,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="px-12 flex gap-6">
      <img src={img} alt="Rocket" className="object-cover w-52 h-48" />
      <div>
        <h2 className="text-xl font-medium">{name}</h2>
        <p className="mt-2">
          {isReserved && <Badge />}
          {' '}
          {description}
        </p>
        {(isReserved
          ? (
            <button
              type="button"
              onClick={() => dispatch(cancelReservation(id))}
              className="mt-6 py-1 px-4 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white"
            >
              Cancel Reservation
            </button>
          )
          : (
            <button
              type="button"
              className="mt-6 py-1 px-4 text-white bg-[#0d6efd] rounded hover:bg-[#0a5eba]"
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
