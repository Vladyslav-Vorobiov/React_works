import React from "react";
import FormDataTable from "./FormDataTable";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptRules: false,
            isSubmitted: false,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({isSubmitted: true})
    }

    handleChange = (field) => (event) => {
        event.target.type === "checkbox" ? this.setState({[field]: (!this.state.acceptRules)}) : this.setState({[field]: event.target.value})
    }

    handleBack = () => {
        this.setState({isSubmitted: false});
    }

    render() {

        if (this.state.isSubmitted === false) {
            return (
                <form name="myForm" className="p-5">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                               onChange={this.handleChange('email')} value={this.state.email}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password"
                               placeholder="Password"
                               onChange={this.handleChange('password')} value={this.state.password}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea type="text" className="form-control" name="address" id="address"
                                  placeholder="1234 Main St" onChange={this.handleChange('address')}
                                  value={this.state.address}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input type="text" className="form-control" name="city" id="city"
                               onChange={this.handleChange('city')} value={this.state.city}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select id="country" name="country" className="form-control" value={this.state.country}
                                onChange={this.handleChange('country')}>
                            <option>Choose a country</option>
                            <option value="argentina">Argentina</option>
                            <option value="germany">Germany</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">Accept Rules</label>
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"
                                   onChange={this.handleChange('acceptRules')} value={this.state.acceptRules}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign in</button>
                </form>
            )

        } else {
            return <FormDataTable data={this.state} onClickBack={this.handleBack}/>
        }
    }
}

export default MyForm