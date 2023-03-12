import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container} from "reactstrap";
import { useParams,Link } from 'react-router-dom';

  


const RouteComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6');
      //console.log(response.data.data);
      //console.log(response.data);
      setData(response.data.data);
    };
    fetchData();
  }, []);



  const params = useParams();
  const id = params.id;
  //console.log(params);


    return(
    <>
        <Link to={"/"}
        style={{ textDecoration: "none",
                 color: "black",
                 justifyContent: "center",
                 alignItems: "center",
                 position: "absolute",
                 top: "130px",
                 left: "450px",}}>
                   {"← Go Back"}
        </Link>
        <Container style={{
          marginTop: '170px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          flexDirection: 'column',
          width: '450px',
          marginLeft: '450px',
        }}>
            {data.length > 0 && (
        <>
          <h2 style={{ marginBottom: '10px',justifyContent: 'center', alignItems: 'center', marginTop:'1px' }}>{data[id-1].name}</h2>
      <div
      style={{
        backgroundColor: `${data[id-1].color}`,
        color: 'white',
        borderRadius: '10px',
        padding: '0.1px',
        width: '50px',
        textAlign: 'center',
        fontSize : '12px',
      }}
    >
          <h4 style={{ marginTop:'2px', marginBottom: '10px',justifyContent: 'center', alignItems: 'center'}}>{data[id-1].tag}</h4>
      </div>
          <div style={{marginTop:'20px', marginLeft: '-15px', borderTop: '2px solid #ccc', paddingTop: '5px'}}>
            {data[id-1].criteria.map((criteria, index) => (
              <p key={index} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', fontWeight: 'bold' }}>{criteria.text}</p>
            ))}
          </div>
      
      </>
      )}
      </Container>
  </>

    );

};

export default RouteComponent;