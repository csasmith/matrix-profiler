import React from 'react';

const MatrixContext = React.createContext({
    matrix: [],
    updateMatrix: () => {},
});

export default MatrixContext;