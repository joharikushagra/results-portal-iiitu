import React, {useState, useEffect} from 'react';
import './result-page.css';
import {Input, Layout, Switch, Button, Dropdown, Menu, Avatar} from 'antd';
import logo from '../../../images/downloaded2.png';
import Marksheet from '../../UiElements/Marksheet/Marksheet';
import {Link} from 'react-router-dom';

function ResultPage(props) {
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [student, setStudent] = useState({name: ''});
  const [publicToggle, setPublicToggle] = useState(false);

  useEffect(() => {
    const std = JSON.parse(localStorage.getItem('student'));
    setStudent(std);
  }, []);

  const {Header, Content, Footer} = Layout;
  const {Search} = Input;
  const logout = (
    <Menu>
      <Menu.Item>
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  );
  const onChange = checked => {
    if (checked) {
      setSearchDisplay(true);
      setPublicToggle(true);
    } else {
      setSearchDisplay(false);
      setPublicToggle(false);
    }
    console.log(`switch to ${checked} and ${searchDisplay}`);
  };

  const onLogout = e => {
    e.preventDefault();
    localStorage.removeItem('auth-token');
    localStorage.removeItem('student');
    props.history.replace('/');
  };

  return (
    <div>
      <Layout className="layout">
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

        <Content style={{padding: '0 50px'}}>
          <div className="site-layout-content">
            <div className="public">
              <div className="public-btn">
                <strong>Public Result</strong>
                <Switch checked={publicToggle} onChange={onChange} style={{marginLeft: '5px'}} />
              </div>
            </div>
            <Marksheet {...props} />
          </div>
        </Content>
        <Button className="btn-prev-result" type="primary" size="large">
          Previous Result
        </Button>
        <Footer style={{textAlign: 'center'}}>
          Cybernauts &copy; Web Development Club IIIT Una
        </Footer>
      </Layout>
    </div>
  );
}

export default ResultPage;
