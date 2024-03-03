import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggeIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return { isLoggeIn, isRefreshing, user };
};
