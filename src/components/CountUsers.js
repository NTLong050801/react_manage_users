import React, { Component } from 'react'

export default class CountUsers extends Component {
  state = {
    showCheck : true
  }
  showHideList = () =>{
   
    this.props.handerShowList(!this.state.showCheck)
     this.setState({
      showCheck : !this.state.showCheck
    })
  }
  
  render() {
    let {totalUsers} = this.props;
    return (
      <div className='text-center'>
        <h1 className='text-success'>Mangage User</h1>
        {
          totalUsers > 0 &&
          <button type="button" class="btn btn-primary position-relative mt-3" onClick={() => this.showHideList()}>
          {
            this.state.showCheck ? "Show List Users" : "Hide List Users "
          }
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalUsers}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        
        }
       
      </div>
    )
  }
}
