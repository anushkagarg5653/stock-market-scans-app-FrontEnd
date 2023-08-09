import React from 'react'
import SubCriteria from './SubCriteria'

const ScanItem = ({scan}) => {
    // console.log(scan.name, 'SCAN');
    // if(!scan || !scan.subCriteria || scan.subCriteria.length === 0){
    //     return null;
    // }
    // console.log(scan.name, 'SCAN after check');
  return (
    <div>
        {scan && scan.SubCriteria && scan.SubCriteria.length > 0 ? (
            <>
            <h2>{scan.name}</h2>
            {scan.SubCriteria.map((subCriteria, index) => (
            <SubCriteria key={index} subCriteria={subCriteria} />
        ))}
            </>
        ):(<p>No sub-criteria available for this scan.</p>)
        } 
    </div>
  );
}

export default ScanItem