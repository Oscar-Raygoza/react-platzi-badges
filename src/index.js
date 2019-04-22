// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//Components
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);