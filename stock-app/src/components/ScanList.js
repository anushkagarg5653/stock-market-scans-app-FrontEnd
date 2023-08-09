import React, { useEffect } from 'react'

const ScanList = () => {
    const [scans, setScans] = ([]);

    useEffect(() =>{
        fetch('/api/scans')
        .then((response) =>response.json())
        .then(data => setScans(data));
        })
  return (

    <div>
        <h1>Stock Market ScanList</h1>
        {ScanList.map(scan => (
            <ScanItem key = {scan.id} scan={scan}/>
            ))}
    </div>
  )
}

export default ScanList