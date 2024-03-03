import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";

export function MessageCard({ img, name, message, action, status }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm shadow-blue-gray-500/25 rounded-lg p-4 sm:p-2">
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          variant="rounded"
          className="w-10 h-10 object-fit"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-semibold flex items-center leading-none"
          >
            {name} 

            <span className={`w-2.5 h-2.5 rounded-full ml-1 ${status ? "bg-green-500" : "bg-red-400"}`}></span>
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-400">
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
}

MessageCard.defaultProps = {
  action: null,
};

MessageCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  action: PropTypes.node,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
