import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const Home= () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6'
      );
      setData(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <Container
      style={{
        marginTop: '170px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <table style={{ borderCollapse: 'collapse'}}>
        <tbody style={{ border: 'none' }}>
          {data.map((item) => (
            <tr
              key={item.id}
              style={{
                borderBottom: '0.5px solid #E8E8E8',
                borderTop: '0.5px solid #E8E8E8',
                backgroundColor: 'white',
              }}
            >
              <td
                style={{
                  color: 'blue',
                  borderLeft: '0.5px solid #E8E8E8',
                  borderRight: 'none',
                  borderBottom: '0.5px solid #E8E8E8',
                  padding: '15px',
                  width: '320px',
                  cursor: 'pointer',
                }}
              >
              <Link
                  to={`/RouteComponent/${item.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                {item.name}
                </Link>
              </td>
              <td
                style={{
                  color: `${item.color}`,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '0.5px solid #E8E8E8',
                  padding: '15px',
                  width: '60px',
                  textAlign: 'right',
                  cursor: 'pointer',
                }}
              >
              <Link
                  to={`/RouteComponent/${item.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <div
      style={{
        backgroundColor: `${item.color}`,
        color: 'white',
        borderRadius: '10px',
        padding: '0.5px',
        width: '50px',
        textAlign: 'center',
        fontSize : '12px',
      }}
    >
                {item.tag}
                </div>
              </Link>
              </td>
              <td
                style={{
                  padding: '10px',
                  borderLeft: 'none',
                  borderRight: 'none',
                  width: '5px',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
              <Link
                  to={`/RouteComponent/${item.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                {'>'}
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;
