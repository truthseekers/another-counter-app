import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
                <App />
                <Counter />
                </div>, document.getElementById('root'));
registerServiceWorker();
