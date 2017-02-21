import { ReduxMessage, createAction, createAjaxAction } from '../../utils/action';
import * as api from '../../utils/api';
import * as constant from '../../utils/constant';

export const print = createAction((data) => {
  console.log('Do something here...');

  return new ReduxMessage(constant.PRINT_HELLO, data);
});

export const fetchUser = createAjaxAction((id) => {
  console.log('Do something here...');

  return new ReduxMessage(constant.FETCH_USER, []);
}, api.FetchUserList);
