import React, {useState} from 'react';

const useErrorHandler = () => {

    const [TheError, setError] = useState(null);

    const handleError = (error) => {
        setError(error)
    }

    const closeError = () => {
        setError(null)
    }

    return [TheError, handleError, closeError];
};

export default useErrorHandler;