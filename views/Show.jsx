import React, { Component } from 'react'
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};
export default class Show extends Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={`${pokemon.img}.jpg`} alt=" " />

                <a href={'/pokemon'} >
                    <p>Back</p>
                </a>

            </div>
        )
    }
}
