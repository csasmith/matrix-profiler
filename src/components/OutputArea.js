import {useContext} from 'react';
import MatrixContext from '../MatrixContext';

const OutputArea = () => {

    const {matrix, setMatrix} = useContext(MatrixContext);
    return matrix.join();
};

export default OutputArea;