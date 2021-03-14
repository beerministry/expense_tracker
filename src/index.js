// import React from 'react';
// import ReactDOM from 'react-dom';
// import { SpeechProvider } from '@speechly/react-client';

// import { Provider } from './context/context';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//     <SpeechProvider appId=" 77089229-cfed-4e1c-9e20-14da2bb0b864" language="en-US">
//         <Provider>
//             <App />
//         </Provider>
//     </SpeechProvider>,
//     document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
        <Provider>
            <App />
        </Provider>,
    document.getElementById('root')
);