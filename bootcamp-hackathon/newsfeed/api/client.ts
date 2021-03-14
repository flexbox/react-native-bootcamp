import { connect } from 'getstream';
import config from '../config';

export function getUserToken(){
  // Instantiate a new client (server side)
  const client = connect(config.GETSTREAM_API_KEY, config.GETSTREAM_API_TOKEN, config.GETSTREAM_APP_ID);
  // Create a token for user with id "the-user-id"
  const userToken = client.createUserToken('the-user-id');

  return userToken
}
