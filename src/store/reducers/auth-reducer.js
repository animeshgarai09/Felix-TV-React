export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload
        case "REMOVE_USER":
            localStorage.removeItem("felix-tv-user-token")
            return {
                _id: "",
                name: "",
                email: "",
                createdAt: "",
                updatedAt: "",
                encodedToken: ""
            }
        default:
            return state
    }
}