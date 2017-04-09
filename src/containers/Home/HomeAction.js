import { ReduxAction } from '../../redux/action';
import * as apis from '../../constants/Apis';
import * as types from '../../constants/ActionTypes';


export const fetchUserList = new ReduxAction(types.FETCH_USER_LIST)(
  () => apis.FetchUserList()
);

export const fetchSingleUser = new ReduxAction(types.FETCH_SINGLE_USER)(
  id => apis.FetchSingleUser(id)
);
