import React, { Component } from 'react';
import './App.css'
import Header from "./components/js/Header";
import LoginForm from './components/js/LoginForm';
import TabMenu from './components/js/TabMenu';
import RecommendedFriends from './components/js/RecommendedFriends';
import FollowFriendListItem from './components/js/FollowFriendListItem';
import Table from './components/js/Table';
import Notification from "./components/js/Notification";
import { render } from '@testing-library/react';

class App extends Component {
  // var items = [
  //   { label: 'HOME' },
  //   { label: 'DEALS' },
  //   { label: 'UPLOAD' },
  //   { label: 'WORK' },
  //   { label: 'SETTINGS' }
  // ];

  // var email = 'abc@example.com';
  constructor() {
    super();
    this.users = [
      {
        img: 'https://picsum.photos/30/30',
        name: 'nguyencanh'
      },
      {
        img: 'https://picsum.photos/30/30',
        name: 'khachai'
      },
      {
        img: 'https://picsum.photos/30/30',
        name: 'nguyenvy'
      }
    ];
    this.userInfos = [
      {
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo',
        isEven: true
      },
      {
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat',
        isEven: false
      },
      {
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo',
        isEven: true
      },
    ];
    this.hasUnread = true;
  }
  render() {
    return (
      <div className="App">
        {/* <Header />*/}
        {/* <LoginForm email={email}/> */}
        {/* <TabMenu title={items}/> */}

        {/* <RecommendedFriends friends={this.users.map((user, index) => <FollowFriendListItem key={index} user={user} />)} /> */}
        {/* <Table userInfos={this.userInfos}/> */}
        <Notification hasUnread={this.hasUnread} />
      </div>
    );
  };
}

export default App;
