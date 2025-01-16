import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const {id} = useParams()
  const [requirements, setrequirements] = useState([]);
  function GetData() {
    fetch(`http://localhost:3000/requirements/`+id)
      .then((res) => res.json())
      .then((data) => {
        setrequirements(data);
      });
  }
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
     <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     <h2>Requirements Details</h2>
    <ul>
      <li>Photo: <img src={requirements.image}/></li>
      <li>Country: {requirements.country}</li>
      <br />
      <li>Description: {requirements.description}</li>
      <br />
      <li>Name: {requirements.name}</li>
      <br />
     </ul>
    </>
  )
}

export default DetailPage;
