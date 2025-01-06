/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Kanishkha from './Kanishkha.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
  </StrictMode>,
)
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from "./Apps";
createRoot(document.getElementById('root')).render(
  <StrictMode>
          <Apps />      
  </StrictMode>,
)