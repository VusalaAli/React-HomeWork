import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Home = () => {
  const [requirement, setrequirement] = useState([])
  function getData(){
    fetch('http://localhost:3000/requirements')
  .then(res=>res.json())
  .then(data=>setrequirement(data))
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
       <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     <div className="container">
      
      <div className="row pt-5" >
      {requirement.map((x)=> 
        <div className="col-3" key={x._id}>
        <img src={x.image} alt="" />
        <p>{x.country}</p>
        <h2>{x.description}</h2>
        <p>{x.name}</p>
        <Link to={`detail/${x._id}`}>Details</Link>
      </div>
      )}
      </div>
     </div>
    </>
  )
}

export default Home
