import React from 'react'

const SubCriteria = ({subCriteria}) => {
  return (
    <div>
        <p> {subCriteria.type}: {subCriteria.label} </p>
        {subCriteria.type === 'variable' && (
            <p>variable Values: {subCriteria.values.join(', ')}</p>
        )}
    </div>
  )
}

export default SubCriteria