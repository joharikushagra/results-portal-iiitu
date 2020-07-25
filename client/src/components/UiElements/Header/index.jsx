import React from 'react'
import { Layout, Menu, Input, Dropdown, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../../images/downloaded2.png';

const {Header} = Layout;
const {Search} = Input;

const logout = (
  <Menu>
    <Menu.Item>
      <Link to="/">Logout</Link>
    </Menu.Item>
  </Menu>
);

export default function CustomHeader({searchDisplay = false, onLogout, student = {name: '@'}}) {
  return (
    <Header className="navbar">
    <div className="logo">
      <img src={logo} id="navbar-logo" alt="IIIT UNA" />
    </div>
    <div className="nav-links">
      {searchDisplay && (
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{marginRight: '10px'}}
        />
      )}
      <Dropdown placement="bottomCenter" overlay={logout}>
        <Link to="/logout" className="ant-dropdown-link" onClick={e => onLogout}>
          <Avatar size={40} style={{backgroundColor: '#3726A6'}}>
            {student.name[0]}
            {student.name.split(' ')[1] ? student.name.split(' ')[1][0] : ''}
          </Avatar>
        </Link>
      </Dropdown>
    </div>
  </Header>
  )
}
