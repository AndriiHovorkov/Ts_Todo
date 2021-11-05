import { NotificationAction, NotificationState } from "../types"

const initialState: NotificationState = {
    message:'',
    type:'succers'
}
export const notificReducer = (state = initialState, action: NotificationAction):NotificationState => {
    switch(action.type) {
        default:
            return state
    }
}

export default notificReducer