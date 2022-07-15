import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {DataLayer} from './DataLayer'
import reducer, { initialState } from './reducer';
const root = createRoot(document.getElementById('root'))
root.render( 
    <DataLayer initialState={initialState} reducer={reducer}>
        <App/>

    </DataLayer>
)
