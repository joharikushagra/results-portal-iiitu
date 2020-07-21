import React, {useState} from 'react';
import './result-page.css';
import {Input, Layout, Breadcrumb, Switch, Button, Dropdown, Menu} from 'antd';
import logo from './downloaded2.png';
import Avatar from '../UiElements/avatar';
import Marksheet from '../UiElements/Marksheet';
import {Link} from 'react-router-dom';

function ResultPage() {
  const [searchDisplay, setSearchDisplay] = useState(true);
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
    if (checked) setSearchDisplay(true);
    else setSearchDisplay(false);
    console.log(`switch to ${checked} and ${searchDisplay}`);
  };

  return (
    <div>
      <Layout className="layout">
        <Header className="navbar">
          <div className="logo">
            <img src={logo} id="navbar-logo" />
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
              <Link className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar />
              </Link>
            </Dropdown>
          </div>
        </Header>

        <Content style={{padding: '0 50px'}}>
          <div className="site-layout-content">
            <div className="public">
              <Breadcrumb className="public-btn">
                <strong>Public Result</strong>
                <Switch defaultChecked onChange={onChange} style={{marginLeft: '5px'}} />
              </Breadcrumb>
            </div>
            <Marksheet />
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
