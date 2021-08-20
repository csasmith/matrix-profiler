import React, {useState} from 'react';
import MatrixContext from './MatrixContext';
import UserInputArea from './components/UserInputArea';
import OutputArea from './components/OutputArea';
import Collapsible from 'react-collapsible';

const App = () => {

    const [matrix, setMatrix] = useState([[1,0,0], [0,1,0], [0,0,1]]);
    const value = {matrix, setMatrix};

    return (
        <MatrixContext.Provider value={value}>
            <UserInputArea />
            <br />
            <OutputArea />
        </MatrixContext.Provider>
    );
};

export default App;



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