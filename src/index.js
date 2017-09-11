import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ItemTable from './ItemTable';

ReactDOM.render(<ItemTable />, document.getElementById('root'));
registerServiceWorker();
