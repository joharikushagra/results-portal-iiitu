import React, {useState, useEffect} from 'react';
import {Layout, List, Typography, Divider} from 'antd';
import {Link} from 'react-router-dom';
import Header from '../../UiElements/Header';
import Axios from 'axios';

const {Content} = Layout;

export default function PrevResults({history}) {
  const [results, setResults] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    const std = JSON.parse(localStorage.getItem('student'));
    const token = localStorage.getItem('auth-token');
    if(!std){
      history.push('/');
    }
    Axios({
      url: `/api/result/getAll/${std.roll}`,
      method: 'get',
      headers: {'x-auth-token': token},
    })
      .then(res => {
        setResults(res.data);
        // setLoading(false);
      })
      .catch(err => {
        console.log(err);
        // setLoading(false);
      });

    return () => {
      console.log('cleanup');
    };
  }, []);
  return (
    <div>
      <Header history={history} />
      <Content style={{padding: '0 50px', textAlign: 'center'}}>
        <div className="site-layout-content">
          <Typography.Title level={3}>Home Dashboard</Typography.Title>
          <hr/>
          <Typography.Title level={4}>All Results</Typography.Title>
          <Divider dashed />
          {/* <Skeleton loading={loading}> */}
            <List
              style={{width: '50vw', margin: 'auto', padding: '0 24px'}}
              size="large"
              bordered
              dataSource={results}
              renderItem={result => (
                <List.Item>
                  <Link
                    style={{margin: 'auto'}}
                    to={`/result/${result.semester}/${result.studentRoll}`}
                  >
                    Semester {result.semester}
                  </Link>
                </List.Item>
              )}
            />
          {/* </Skeleton> */}
          <br />
        </div>
      </Content>
    </div>
  );
}
