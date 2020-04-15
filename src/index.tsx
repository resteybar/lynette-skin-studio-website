import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// NOTE TO SELF: Checkout styletron doc. to see how to run this faster?
//               They said it in the doc. about it. I just rushed it to 
//               test out styletron fast enough.
const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine()

// 1. Create a client engine instance
const engine = new Styletron()

ReactDOM.render(
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <App />
    </StyletronProvider>, 
    document.getElementById('root')
)