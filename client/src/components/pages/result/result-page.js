import React, {useState} from 'react';
import './result-page.css';
import {Layout, Switch} from 'antd';

import Marksheet from '../../UiElements/Marksheet/Marksheet';
import Header from '../../UiElements/Header';

function ResultPage(props) {
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [publicToggle, setPublicToggle] = useState(false);

  const {Content, Footer} = Layout;

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

  return (
    <div>
      <Layout className="layout">
        <Header {...props} />

        <Content style={{padding: '0 50px'}}>
          <div className="site-layout-content">
            <div className="public">
              {/* <div className="public-btn">
                <strong>Public Result</strong>
                <Switch checked={publicToggle} onChange={onChange} style={{marginLeft: '5px'}} />
              </div> */}
            </div>
            <Marksheet {...props} />
          </div>
        </Content>

        <Footer style={{textAlign: 'center'}}>
          Cybernauts &copy; Web Development Club IIIT Una
        </Footer>
      </Layout>
    </div>
  );
}

export default ResultPage;
