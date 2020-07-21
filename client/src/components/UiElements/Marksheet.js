import React, {useState, useEffect} from 'react';
import {Skeleton} from 'antd';
import './Marksheet.css';

function Marksheet() {
  const [student, setStudent] = useState({});
  const [result, setResult] = useState(false);

  // cdm
  useEffect(() => {
    const std = {
      name: 'Kushagra Johari',
      branch: 'IT',
      roll: 19315,
    };
    // fetching data
    setTimeout(() => setStudent(std), 2000);
    setTimeout(() => setResult(true), 4000);
  }, []);
  const {name, branch, roll} = student;
  return (
    <div>
      <Skeleton loading={!name}>
        <h3>Candidate's Name: {name || 'xxxxxxxxxxx'}</h3>
        <h3>Branch: {branch || 'xxxxxxxxxxx'}</h3>
        <h3>Roll No: {roll || 'xxxxxxxxxxx'}</h3>
      </Skeleton>
      <hr />
      <Skeleton loading={!result} paragraph={{rows: 0}}>
        {' '}
        <h4 style={{textAlign: 'center'}}>Semester X</h4>
      </Skeleton>
      <hr />
      <Skeleton loading={!result} paragraph={{rows: 5}}>
        <table>
          <tr>
            <th>Sub Code</th>
            <th>Sub Names</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>x</td>
          </tr>
          <tr>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>x</td>
          </tr>
          <tr>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>x</td>
          </tr>
          <tr>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>x</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <br />
              SGPA:9.00
              <br />
              CGPA:8.87
            </td>
          </tr>
        </table>
      </Skeleton>
    </div>
  );
}

export default Marksheet;
