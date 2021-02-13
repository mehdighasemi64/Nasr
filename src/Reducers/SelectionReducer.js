const initState = {
    items: []
}

const SelectionReducer = (state = initState, action) => {
    var s = Object.assign({}, state);

    switch (action.type) {

        case "INIT_SELECTIONLIST":
            s.items = action.item;          
            return s;

        case "ADD_SELECTIONLIST":
            s.items.push(action.item);
            return s;
   
        case "SUB_SELECTIONLIST":
            s.items = s.items.filter(items => items.id !== action.item.id);
            return s;

        default:
            return state;
    }

}
export default SelectionReducer;