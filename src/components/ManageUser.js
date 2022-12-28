import React, { Component } from 'react'
import CountUsers from './CountUsers';
import FormUsers from './FormUsers';
import ListUsers from './ListUsers';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

class ManageUser extends Component {
    state = {
        user: null,
        showList : true
    }
    async componentDidMount() {
        //get data from api
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.props.receiveData(res.data.data)
    }
    handerDelete = (id) => {
        this.props.deleteUser(id)
        toast.info('Xóa thành công')
    }
    handerSaveUser = (user) => {
        this.props.editUser(user);
        toast.success('Update thành công')
    }
    handerShowList = (check) => {
        // console.log(check)
        // return {
        //     check
        // }
        this.setState({
            showList : check
        })
    }


    render() {

        return (
            <div className='container mt-5'>
                <CountUsers
                    totalUsers={this.props.listUsers.length}
                    handerShowList={this.handerShowList}
                />
                <div className='row mt-5'>
                    <FormUsers
                        addUser={this.props.addUser}
                    />
                    {
                   
                        this.state.showList &&
                            <ListUsers
                                listUsers={this.props.listUsers}
                                handerDelete={this.handerDelete}
                                handerShowList={this.handerShowList}
                                handerEdit={this.handerEdit}
                                saveUser = {this.handerSaveUser}
                            />
                    }

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listUsers: state.listUsers
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        receiveData: (resData) => dispatch({ type: "RECEIVE_DATA", payload: resData }),
        deleteUser: (id) => dispatch({ type: "DELETE_USER", payload: id }),
        addUser: (users) => dispatch({ type: "ADD_USER", payload: users }),
        editUser: (user) => dispatch({ type: "EDIT_USER", payload: user })
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(ManageUser);
