import { GET_TASKS, ADD_TASKS, COMPLATE_TASKS} from './actions';

export default rootReducer;
const initialState = {
	tasks :[]
}

function rootReducer(state, action){
	switch(action.type){
		case GET_TASKS:
			return Object.assign({}, state, { tasks: action.payload.tasks });
		case ADD_TASKS:
			return addTasksReducer(state, action);
		case COMPLATE_TASKS:
			return completeTaskReducer(state, action);
		default:
			return state; 
	}
	return state;
}

function addTasksReducer(state, action){
	var task = action.payload;
	task.complated = false;

	var lastTask = state.tasks[state.tasks.length - 1]
	task.id = lastTask++;

	return Object.assign({}, state, { tasks: [...state.tasks, task] });
}
function completeTaskReducer(state, action){
	var id = action.payload.id;
	return Object.assign({}, state, { tasks: state.tasks.tasks.map(task =>{
			if(id === task.id){
				return Object.assign({}, task, { completed: true });
			}
		}) 
	});
}

var task = {
	id: 1,
	type='habit',
	text 'Go for a walk'
};
var emptyObj = {};
empty = Object.assign{emptyObj, task, {complated: true} };