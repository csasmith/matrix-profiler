import { useContext, useState } from "react";
import MatrixContext from "../MatrixContext";
import MatrixInput from './MatrixInput';


const UserInputArea = () => {

    const [numRows, setNumRows] = useState(3);
    const [numCols, setNumCols] = useState(3);
    const { matrix, setMatrix } = useContext(MatrixContext);

    // literally no error handling
    const handleRowChange = (e) => {
        const rows = parseInt(e.target.value);
        setNumRows(rows);
        // use either slice or map/filter for updating matrix with new size...
    };

    const handleColChange = (e) => {
        const cols = parseInt(e.target.value);
        setNumCols(cols);
    };

    return (
        <div>
            <p>Choose Size:</p>
            <input type='text' onBlur={(e) => handleRowChange(e)}/>
            X
            <input type='text' onBlur={(e) => handleColChange(e)}/>
            <MatrixInput numRows={numRows} numCols={numCols}/>
        </div>
    );
};

export default UserInputArea;

/*
<div id='container'>
        <div id='input'>
            <div align='center'>
                Size
                <table class='mat-size'>
                    <tr>
                        <td>
                            <input type='text'></input>
                        </td>
                        <td>
                            <input type='text'></input>
                        </td>
                    </tr>
                </table>
            </div>
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
        </div>
        <div id='output'>
            <Collapsible trigger='Property'>
                <p>Rawr</p>
            </Collapsible>
        </div>
    </div>
*/