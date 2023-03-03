import React from 'react'

class FormDataTable extends React.Component {

    render() {

        const formData = this.props.data

        const tableKeys = Object.keys(formData)
            .filter(el => el !== "isSubmitted")
            .sort((a, b) => {
                if (a < b) return -1
                else if (a > b) {
                    return 1
                } else return 0
            })

        return (
            <div className='p-5'>
                <button type="button" className="btn btn-primary mb-4" onClick={this.props.onClickBack}>Back</button>
                <table className="table">
                    <tbody>
                    {tableKeys.map(key => {
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{formData[key]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FormDataTable