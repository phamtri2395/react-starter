/**
 * Define API handling methods
 */

import Ajax from './ajax';
import * as constant from './constant';


/**
 * Home's apis
 */

export const FetchUserList = id => (
  new Ajax({
    ...constant.apiList.getAllUser,
    headers: { 'Content-Type': 'application/json' }
  })
);
