import React, { Component } from 'react'
import { toast } from 'react-toastify';

export default class FormUsers extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    srcImg: '',
  }
  changeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  changeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })

  }
  handleImageChange = (e) => {
    let name_file = e.target.files[0];
    let ext = name_file.name.split('.').pop()
    if (ext === 'jpg' || ext === 'png') {
      this.setState({
        srcImg: URL.createObjectURL(e.target.files[0]),
      })
    }
    else {
      alert("Vui lòng chọn file jpg hoặc png")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);
    let avatar_df = "https://i.pinimg.com/736x/a0/22/ee/a022ee44664e059b02c965bd6e1322e4.jpg";

    let user = {
      id: id,
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      avatar: this.state.srcImg
    }
    if (this.state.srcImg === '') {
      user.avatar = avatar_df;
    }
    this.props.addUser(user)
    toast.success('Thêm thành công')
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      srcImg: ""
    })
  }
  render() {
    let { firstName, lastName, email, srcImg } = this.state;
    return (
      <div className='col-6'>
        <form onSubmit={this.handleSubmit} >
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" value={firstName} onChange={(event) => this.changeFirstName(event)} className="form-control" id="firstname" required />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" value={lastName} onChange={(event) => this.changeLastName(event)} className="form-control" id="lastname" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" value={email} onChange={(event) => this.changeEmail(event)} className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">Image Avatar</label>
            <input onChange={(e) => this.handleImageChange(e)} className="form-control" type="file" id="formFileMultiple" multiple />
          </div>
          {
            srcImg !== '' &&
            <>
              <br />
              <img src={srcImg} className="img-fluid imgUpload" alt="..."></img>
              <br />
              <br />
            </>
          }
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  }
}
