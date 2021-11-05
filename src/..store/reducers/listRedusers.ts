import { ListsAction, ListState } from "../types"

const initialState:ListState = {
    lists: {},
    listIdToDelete: '',
    listToEdit: null,
    listById: null,
    selectedList: null,
    taskToDelete:null,
    taskToEdit: null
}

export const listReducer = (state = initialState, actions: ListsAction):ListState => {
    switch(actions.type) {
        default:
            return state
    }
}
export default listReducer