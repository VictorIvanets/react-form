export const INITIAL_STATE = {

isValid: {
    post: true,
    title: true,
    date: true,
    tag: true,
    },
values: {
        post: '',
        title: '',
        date: '',
        tag: '',
        userId: '',
        id: ''
    },
isFormReadiToSubmit: false
};


export function formReducer(state, action){

switch(action.type) {

case 'SET_VALUE': return {
    ...state, values: {...state.values, ...action.payload}
};

case 'CLEAR': return {...state, values: INITIAL_STATE.values};


case 'RESET_VALID': 
    return {...state, isValid: INITIAL_STATE.isValid
    };

case 'SUBMIT': {
    const titleValid = action.payload.title.trim().length;
    const dateValid = action.payload.date.trim().length;
    const tagValid = action.payload.tag.trim().length;
    const postValid = action.payload.post.trim().length;
    return {
        values: action.payload,
        isValid: {
            post: postValid,
            title: titleValid,
            date: dateValid,
            tag: tagValid
            },
        isFormReadiToSubmit: titleValid && 
        dateValid && 
        tagValid && postValid
       
    };
}
}

}


