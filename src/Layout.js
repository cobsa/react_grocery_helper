import React from 'react'

import Title from './layout/Title'

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "props"
        };
    }
    render() {
        return <Title title={this.state.title} />
    }
}

export default Layout