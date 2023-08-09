import React, { useEffect, useState } from 'react'
import ScanItem from './ScanItem';

const ScanList = () => {
    const [scans, setScans] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/api/scans')
        .then(response => response.json())
        .then(data => {
            console.log("data",data);
            setScans(data)})
        .catch(error => console.error('error fetching', error));
        }, []);

        if(scans.length === 0){
            return <p>Loading...</p>
        }
  return (

    <div>
        <h2>Stock Market ScanList</h2>
        {scans.map(scan => (
            <ScanItem key = {scan.id} scan={scan}/>
            ))}
    </div>
  )
}

export default ScanList