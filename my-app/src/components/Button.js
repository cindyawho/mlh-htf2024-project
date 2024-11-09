import React from 'react';
import '../App.css';
import './button.css';

function Button({text}) {
    return (
        <div class="buttonContainer">
            <button>{text}</button>
        </div>
    );
};

export default Button;