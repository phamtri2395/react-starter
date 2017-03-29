import { createAction, createAjaxAction, ReduxAction } from '../../redux/action';
import * as api from '../../utils/api';
import * as constant from '../../utils/constant';


export const fetchUser = new ReduxAction(constant.FETCH_USER)(
  id => api.FetchUserList(id)
);
