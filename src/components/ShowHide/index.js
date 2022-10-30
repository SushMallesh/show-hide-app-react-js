import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickShowHideFirstname = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  onClickShowHideLastname = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div>
            <button
              onClick={this.onClickShowHideFirstname}
              className="button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div>
            <button
              onClick={this.onClickShowHideLastname}
              className="button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
