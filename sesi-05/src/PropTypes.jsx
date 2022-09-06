import React from 'react'
import PropTypes from "prop-types"

class HeroName extends React.Component {
    render() {
        return <h3>{this.props.name}</h3>
    }
}

// propTypes digunakan untuk validasi tipe props yang diharapkan
HeroName.propTypes = {
    name: PropTypes.string
}

export default class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "this is a string"
        }
    }

    render() {
        return <HeroName name={this.state.name} />
    }
}