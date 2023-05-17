const BookingContent = ({ booking, handleDelete, handlePending }) => {
  const { _id, img, customerName, price, service, date, email, status } =
    booking;

  console.log(booking);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-yellow-500 hover:to-pink-500">
            Confirm
          </button>
        ) : (
          <button
            onClick={() => handlePending(_id)}
            className="btn bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingContent;
