import React from 'react'

const ScanItem = ({scan}) => {
  return (
    <div>
        <h2>{scan.name}</h2>
        {scan.subCriteria.map((subCriteria, index) => (
            <subCriteria key={index} subCriteria={subCriteria} />
        ))}
    </div>
  )
}

export default ScanItem