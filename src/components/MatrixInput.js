import { useContext, useState } from 'react';
import MatrixContext from '../MatrixContext';

const MatrixInput = (props) => {

    const {matrix, setMatrix} = useContext(MatrixContext);

    const handleEntryChange = (e, row, col) => {
        const entry = parseInt(e.target.value);
        const newMatrix = matrix;
        newMatrix[row][col] = entry;
        setMatrix(newMatrix);
        console.log('something')
        console.log(newMatrix.join())
    };

    return (
        <div>
            <table>
                {[...Array(props.numRows)].map((rowEl, rowIndex) => (
                    <tr>
                        {[...Array(props.numCols)].map((colEl, colIndex) => (
                            <input type='text' onBlur={(e) => handleEntryChange(e, rowIndex, colIndex)}/>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default MatrixInput;

/*
<div align='center'>
                Matrix
                <table class='matrix'>
                    <tr>
                        <input type='text'></input>
                        <input type='text'></input>
                        <input type='text'></input>
                    </tr>
                    <tr>
                        <input type='text'></input>
                        <input type='text'></input>
                        <input type='text'></input>
                    </tr>
                    <tr>
                        <input type='text'></input>
                        <input type='text'></input>
                        <input type='text'></input>
                    </tr>
                </table>
            </div>
            */