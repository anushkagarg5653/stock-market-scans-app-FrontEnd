import React from 'react'
import SubCriteria from './SubCriteria'

const ScanItem = ({scan}) => {
    if(!scan || !scan.subCriteria || scan.subCriteria.length === 0){
        return null;
    }
    console.log(scan.name, 'SCAN');
  return (
    <div>
        <h2>{scan.name}</h2>
        {scan.subCriteria.map((subCriteria, index) => (
            <SubCriteria key={index} subCriteria={subCriteria} />
        ))}
    </div>
  )
}

export default ScanItem