import React, { Component } from 'react'

export default class ListUsers extends Component {
  state = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    srcImg: '',
    listUsers: '',
    reOfPage: 5,
    curpage: 1,
    AllPage: 2

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
  clickDelete = (id) => {
    this.props.handerDelete(id)
  }
  clickSave = () => {
    let user = {
      id: this.state.id,
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      avatar: this.state.srcImg
    }
    this.props.saveUser(user);
  }
  clickEdit = (user) => {
    // this.props.handerEdit(user);
    this.setState({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      srcImg: user.avatar
    })
  }

  clickPagation = (trang) => {
    let listUsers = this.props.listUsers;
    let allPage = Math.ceil(listUsers.length / this.state.reOfPage);
    if (trang < 1) {
      trang = 1
    }
    if (trang > allPage) {
      trang = allPage
    }
    this.setState({
      curpage: trang,
      AllPage : allPage
    })
  }
  changeRcofPage = (e) => {
    // alert(e.target.value)
    // let listUsers = this.props.listUsers;
    // let allPage = Math.ceil(listUsers.length / this.state.reOfPage);
    this.setState({
      reOfPage : e.target.value,
  
    })
  }

  render() {
    let listUsers = this.props.listUsers
    let { firstName, lastName, email, reOfPage, curpage} = this.state;

    let AllPage = Math.ceil(listUsers.length / reOfPage)

    let testArr = [];
    for (let i = 0; i < AllPage; i++) {
      testArr.push(i)
    }

    return (

      listUsers && listUsers.length > 0 ?
        <div className='col-6'>
          <div className="col-md-3 position-relative float-end">
            <label for="validationTooltip04" className="form-label">Records of Page</label>
            <select onChange={(e) => this.changeRcofPage(e)} className="form-select" id="validationTooltip04" required>
              <option>2</option>
              <option>4</option>
              <option selected>5</option>
              <option>10</option>
            </select>
            <div className="invalid-tooltip">
              Please select a valid state.
            </div>
          </div>
          <table className="table" style={{ "height": "auto" }}>
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {

                listUsers.map((item, index) => {
                  return (
                    (curpage * reOfPage) > index && index >= (curpage - 1) * reOfPage &&
                    <tr >
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img style={{ "float": "left" }} src={item.avatar} className="img-fluid me-2" alt="..." />
                        <span style={{ "float": "left" }}>{item.first_name + " " + item.last_name}</span>
                      </td>
                      <td className=''>{item.email}</td>
                      <td>
                        <button className='btn btn-sm btn-danger ' onClick={() => this.clickDelete(item.id)} >Delete</button>
                        <button className='btn btn-sm btn-info ms-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.clickEdit(item)} >Edit</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li onClick={() => this.clickPagation(curpage - 1)} className={curpage === 1 && "disabled " + " page-item"}><a className="page-link" href="/#">Previous</a></li>
              {
                testArr.map((index) => {
                  return (
                    <li className={curpage === index + 1 && "active" + " page-item"} onClick={() => this.clickPagation(index + 1)} ><a className="page-link" href="/#">{index + 1}</a></li>
                  )
                })
              }
              <li onClick={() => this.clickPagation(curpage + 1)} className={curpage === AllPage && "disabled " + " page-item"}><a className="page-link" href="/#">Next</a></li>
            </ul>
          </nav>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Update Users</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
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
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => this.clickSave()} >Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        : <h3 className='col-6 text-center text-danger'>
          Please Add User at Form
        </h3>
    )
  }
}
