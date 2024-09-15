const initialState = [];

const instructionTitleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_INSTRUCTION_TITLE':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
};

export default instructionTitleReducer;