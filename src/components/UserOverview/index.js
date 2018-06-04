// @flow
import React from 'react';

type Props = {
  id: string,
  username: string,
};

class UserOverview extends React.Component<Props> {
  render() {
    return <div>
      <ui>
        <li>ID: {this.props.id}</li>
        <li>Email: {this.props.username}</li>
      </ui>
    </div>;
  }
}

export default UserOverview;
