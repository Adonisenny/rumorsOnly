import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MyfirstContext} from './Context/Mycontext.js'
import { AuthContextProvider } from './Context/authcontext';
import { CommentsContextProvider } from './Context/commentContext';

import { CommentscommentsContextProvider } from './Context/commentcommentcontext';
import { DmContextProvider } from './Context/DMContext.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <MyfirstContext>
        <DmContextProvider>
        <CommentsContextProvider>
            <CommentscommentsContextProvider>
            
<AuthContextProvider>
    
  
<App />


</AuthContextProvider>
</CommentscommentsContextProvider>
</CommentsContextProvider>
</DmContextProvider>
    </MyfirstContext>
   
);

