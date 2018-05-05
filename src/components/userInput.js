import React from 'react'

export default class UserInput extends React.Component {
    
    onSubmit(e) {
        e.preventDefault()
        this.props.checkGuess()
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input type="text" onChange={e => this.props.input(e.target.value)} id="userguess" min="1" max="100" />
                <button type="submit" id="guess-button">{this.props.submitButton}</button>
            </form>
        )
    }
}