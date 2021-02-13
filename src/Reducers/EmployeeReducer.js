// const initState = {
//     items: [{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61","profile_image": "" },{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63","profile_image":""},{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66","profile_image":""},{"id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22","profile_image":""}]
// }
const initState = {
    items: []
}

const EmployeeReducer = (state = initState, action) => {
    switch (action.type) {

        case "INIT_EMPLOYEELIST":
            debugger;
            var s = Object.assign({}, state);
            // for (var i = 0; i < action.item.data.length; i++) {
                for (var i = 0; i < 6; i++) {
                s.items.push(action.item.data[i]);
            }
            return s;

        default:
            return state;
    }
}
export default EmployeeReducer;
