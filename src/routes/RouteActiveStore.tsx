import React from 'react'
import { RouteActiveContext } from './RouteActive'

const RouteActiveStore = () => {
    return React.useContext(RouteActiveContext)
}

export default RouteActiveStore