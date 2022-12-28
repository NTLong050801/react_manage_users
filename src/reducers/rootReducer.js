

const initState = {
    listUsers: [

    ]
    ,
 

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "RECEIVE_DATA":
            let listUsers = action.payload;
            return {

                ...state, listUsers
            }

        case "DELETE_USER":
            let affterDelUsers = state.listUsers;
            affterDelUsers = affterDelUsers.filter(item => item.id !== action.payload);
             console.log(affterDelUsers)
            //console.log(state.arrjob= currenJobs)
            return {
                ...state, listUsers: affterDelUsers
            };
        case "ADD_USER":
            return {

                ...state, listUsers: [...state.listUsers, action.payload]
            }
        case "EDIT_USER":
            let updateUser = action.payload;
            // console.log(updateUser)
            let ListU = state.listUsers;
            for(let i = 0 ; i < ListU.length ; i++){
                if(ListU[i].id === updateUser.id){
                    ListU[i].email = updateUser.email;
                    ListU[i].first_name = updateUser.first_name;
                    ListU[i].last_name = updateUser.last_name;
                }
            }
            return {
                ...state,listUsers:[...ListU]
            }
           
        default:
            return state;
    }

}
export default rootReducer;