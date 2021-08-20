import { useContext, useState } from "react";
import MatrixContext from "../MatrixContext";


const UserInputArea = () => {
    
    const {matrix, setMatrix} = useContext(MatrixContext);

    const [numRows, setNumRows] = useState(3);
    const [numCols, setNumCols] = useState(3);

    const changeMatrix = () => {
        setMatrix([2,2,2]);
    };

    return (
        <div>
            <p>Choose Size:</p>
            <input type='text' />
            X
            <input type='text' />
            <button onClick={changeMatrix}>change</button>
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