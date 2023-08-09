import React, { useState }  from 'react'

const SubCriteria = ({subCriteria}) => {
    const [showDetails, setShowDetails] = useState(false);
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    }
  return (
    <div>
        <p onClick={handleToggleDetails}>{subCriteria.text} </p>
        {showDetails && (
            <div>
                 {subCriteria.type === 'variable' && (
            <p>variable Values: {subCriteria.values.join(', ')}</p>
        )}
            </div>
        )}
        
    </div>
  )
}

export default SubCriteria