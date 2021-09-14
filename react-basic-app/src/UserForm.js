import React from "react"

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            gender: '',
            address: '',
            accepTerms: false
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (document.biodata.gender.selectedIndex == '') {
            alert('choose gender!')
            document.biodata.gender.focus()
            return false;
        }
        alert(
            '\n username: ' + this.state.userName +
            '\n gender: ' + this.state.gender +
            '\n address: ' + this.state.address +
            '\n accepTerms: ' + this.state.accepTerms
        )
        this.setState({
            userName: '',
            gender: '',
            address: '',
            accepTerms: false


        },
            function myFocus() {
                document.getElementById("userName").focus()
            }
        )

    }

    render() {
        return (<div>
            <form className="form-wrapper" name="biodata" onSubmit={this.handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="formGroupUserNameInput" className="form-label">Username</label>
                    <input type="text" onChange={this.handleChange} value={this.state.userName} className="form-control" name="userName" id="userName" placeholder="Enter username ..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select onChange={this.handleChange} name="gender" value={this.state.gender} className="form-select" aria-label="select gender">
                        <option>Choose ...</option>
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" onChange={this.handleChange} name="address" id="address" value={this.state.address} />
                </div>
                <div class="form-check">
                    <input onChange={this.handleChange} className="form-check-input" type="checkbox" value={this.state.accepTerms} name="accepTerms" id="accepTerms" />
                    <label className="form-check-label" htmlFor="accepTerms">Accep Terms</label>
                </div>
                <div className="mb-3">
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        )
    }

}


export default UserForm