import React, {useContext, useState, useEffect} from 'react'
import { Layout, Menu, Input, Dropdown, Avatar} from 'antd';
import logo from '../../../images/downloaded2.png';
import { AuthContext } from '../../../Context/Auth';
import homeImage from '../../../images/icons8-home-26.png';
import { Link } from 'react-router-dom';
const {Header} = Layout;
const {Search} = Input;




export default function CustomHeader({searchDisplay = false,  history}) {
  
  const auth = useContext(AuthContext);
  const [student, setStudent] = useState({name: '@'});

  useEffect(() => setStudent(JSON.parse(localStorage.getItem('student'))),[]);
  console.log(student);
  
  const onLogout = () => {
    auth.setIsAuthenticated(false);
    console.log(auth);
    localStorage.setItem('auth-token', '');
    localStorage.setItem('student', '');
    history.push('/login');
  }
  
  const logout = (
    <Menu>
      <Menu.Item>
        <div onClick={onLogout}>Logout</div>
      </Menu.Item>
    </Menu>
  );

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
      <Link to='/result/prev'>
      <img src={homeImage} style={{marginRight:'15px'}}/>
      </Link>
      <Dropdown placement="bottomCenter" overlay={logout}>
      
          <Avatar size={40} style={{backgroundColor: '#3726A6'}}>
            {student.name[0]}
            {student.name.split(' ')[1] ? student.name.split(' ')[1][0] : ''}
          </Avatar>
        </Dropdown>
    </div>
  </Header>
  )
}
