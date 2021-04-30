const makeId = () => {
    let ID = '';
    let Characters = '1234567890';
    for (var i = 0; i < 9; i++) {
        ID += Characters.charAt(Math.floor(Math.random() * 10));
    }
    return ID;
}

export const bookReducer = (state, action) => {
    switch(action.type) {
        case  "ADD_BOOK" :
            return [
                ...state, 
                {
                    title : action.book.title,
                    image : action.book.image,
                    id : makeId()
                }
            ]
        case "REMOVE_BOOK" : 
        return state.filter(book => book.id !== action.id)
        default :
            return state;
    }
}
