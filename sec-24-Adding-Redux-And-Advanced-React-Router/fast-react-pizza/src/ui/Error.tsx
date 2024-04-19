import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

type ErrorType = {
  data?: string;
  message?: string;
};

function Error() {
  const navigate = useNavigate();

  const error: ErrorType = useRouteError() as ErrorType;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>

      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
