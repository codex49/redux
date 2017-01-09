export const GET_TASKS      = 'GET_TASKS';
export const ADD_TASKS      = 'ADD_TASKS';
export const COMPLATE_TASKS = 'COMPLATE_TASKS';

const tasks = [
	{
		id: 1,
		type: 'daily',
		text: 'Check facebook',
		completed: false
	},
	{
		type: 'habit',
		text: 'Walk up the staires'
	},
	{
		id: 2,
		type: 'todo',
		text: 'Finish redux tuto',
		completed: false
	},	
	{
		id: 3,
		type: 'todo',
		text: 'Finish redux slide',
		completed: true
	},
];

export function getTasks(){
	return {
		type: GET_TASKS,
		payload:{
			tasks
		}
	};
}
export function addTasks(type, text){
	return {
		type: ADD_TASKS,
		payload:{
			type,
			text
		}
	};
}
export function complateTask(id){
	return{
		type: COMPLATE_TASKS,
		payload:{
			id
		}
	}
}