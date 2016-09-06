//State argument is not application state, only the state this reducer is
//responsible for
//state = null -> ES6 syntax, when state is undefined, replace with null
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            //don't touch state object
            //state.title = book.title - > BAD
    }
    return state
}