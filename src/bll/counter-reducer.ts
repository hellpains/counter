// const SET_COUNT = 'SET-COUNT'
// const SET_START_COUNT = 'SET-START-COUNT'
// const SET_MAX_COUNT = 'SET-MAX-COUNT'
// const SET_VALUE = 'SET-VALUE'


let initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    help: false,
    error: false,
}


type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof incCountAC>
    | ReturnType<typeof setStartCountAC>
    | ReturnType<typeof setMaxCountAC>
    | ReturnType<typeof setValueAC>

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_COUNT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'SET_START_COUNT': {
            return {
                ...state,
                startValue: action.str
            }
        }
        case 'SET_MAX_COUNT': {
            return {
                ...state,
                maxValue: action.str
            }
        }
        case 'SET_VALUE': {
            return {
                ...state,
                count: state.startValue
            }
        }
        default :
            return state
    }

}


export const incCountAC = () => ({type: 'SET_COUNT'} as const)
export const setStartCountAC = (str:any) => ({type: 'SET_START_COUNT',str} as const)
export const setMaxCountAC = (str:any) => ({type: 'SET_MAX_COUNT',str} as const)
export const setValueAC = () => ({type: 'SET_VALUE'} as const)

