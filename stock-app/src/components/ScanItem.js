import React, { useState } from 'react'
import SubCriteria from './SubCriteria'

const ScanItem = ({scan}) => {

    // console.log(scan.name, 'SCAN');
    // if(!scan || !scan.subCriteria || scan.subCriteria.length === 0){
    //     return null;
    // }
    // console.log(scan.name, 'SCAN after check');

    const [showDetails, setShowDetails] = useState(false);
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    }
  return (
    <div>
        {scan && scan.SubCriteria && scan.SubCriteria.length > 0 ? (
            <>
            <div className='scan-name' onClick={handleToggleDetails}>
                <h5>{scan.name}</h5>
            <h6 style={{color:scan.color}}>{scan.tag}</h6>
            <hr></hr>

            </div>
            
            {showDetails && (
                <div>
                    {scan.SubCriteria.map((subCriteria, index) => (
                    <SubCriteria key={index} subCriteria={subCriteria} />
            ))}
                </div>
            )}
            
            </>
        ):(<p>No sub-criteria available for this scan.</p>)
        } 
    </div>
  );
}

export default ScanItem