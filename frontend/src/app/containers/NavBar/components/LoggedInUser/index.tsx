/**
 *
 * LoggedInUser
 *
 */
import * as React from 'react';

const auth = useAuth();

export function LoggedInUser() {
  return <div>{auth.user.username} is logged in</div>;
}
