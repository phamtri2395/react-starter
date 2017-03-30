import { ReduxAction } from '../../redux/action';
import * as api from '../../utils/api';
import * as constant from '../../utils/constant';


export const fetchUserList = new ReduxAction(constant.FETCH_USER_LIST)(
  () => api.FetchUserList()
);

export const fetchSingleUser = new ReduxAction(constant.FETCH_SINGLE_USER)(
  id => api.FetchSingleUser(id)
);
