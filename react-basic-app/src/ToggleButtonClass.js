import React from 'react'

class ToggleButtonClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        // this.handleClick = this.handleClick.bind(this) // jika handleClick() menggunakan arrow function maka tidak perlu ada baris kode ini
    }

    handleClick = (value, e) => {
        console.log(e)
        console.log(value)
        this.setState((state) => {
            return { isToggleOn: state.isToggleOn ? false : true }
        })
    }
    render() {
        return (
            <button onClick={(e) => this.handleClick('somevalue', e)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        )
    }
}
export default ToggleButtonClass