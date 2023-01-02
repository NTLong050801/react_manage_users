

const initState = {
    listUsers: [

    ]
    ,
    loginCheck : true,
    blogs : [
        {id : 1 , title : "Japan Today" , author : "Long Nguyen" , content : "Shares began the year mixed on Monday, with most markets closed for New Year holidays. \r\nThis week brings employment data and minutes from the latest meeting of the Federal Reserve as it battles infl… [+4225 chars]", img : 'https://mdbootstrap.com/img/new/standard/nature/023.jpg' },
        {id : 2 , title : "Viet Nam Today" , author : "Long " , content : "Shares began the year mixed on Monday, as it battles infl… [+4225 chars]", img : 'https://mdbootstrap.com/img/new/standard/nature/023.jpg' }

    ]
        
    
 

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,loginCheck : false
            }
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
        case "CREATE_BLOG":
            let blog = action.blog;
            console.log(blog)
            return {

                ...state, blogs: [...state.blogs,blog]
            }
        default:
            return state;
    }

}
export default rootReducer;