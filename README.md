# React + TypeScript + Vite + Supabase 
# App Name 
TODO List 

## Supabase 
1. Create helper file to initialize Supabase client 
2. Create Supabase Auth (https://supabase.com/docs/reference/javascript/auth-signinwithpassword)

## Front end 
Reactjs
Installing React : vitelatest

#### React Form (https://www.w3schools.com/react/react_forms.asp)
onChange: occurs when the value of an HTML element is changed.  
onSubmit : triggers a form submission when it is added to a form element.

### State Management in React
#### Redux
Redux is a state management library that allows you to manage the state of your JavaScript applications more efficiently and predictably.

All components in your application can access this store and update or retrieve data from it as needed.

1. Store : The Redux store is like a giant container that holds all the data for your application.
2. Actions : An action is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.
An action must have a "type" property describing the action being performed. This "type" property is typically defined as a string constant to ensure consistency and avoid typos.

In addition to the "type" property, an action can have a "payload" property. The "payload" property represents the data that provides additional information about the action being performed. For example, if an action type is ADD_TASK, the payload might be an object containing a new task item's "id", "text", and "completed status".
Example : 
    {
      type: 'ADD_TASK',
      payload: {
        id: 1,
        text: 'Buy groceries',
        completed: false
      }
}
Note that to create actions, we use action creators. Action creators are functions that create and return action objects.

Here is an example of an action creator that takes in a task's text and returns an action object to add the task to the Redux store:

    function addTask(taskText) {
      return {
        type: 'ADD_TASK',
        payload: {
          id: 1,
          text: taskText,
          completed: false
        }
      }
    }

3. Dispatch 
In Redux, dispatch is a function provided by the store that allows you to send an action to update the state of your application. When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

4. Reducers 
In Redux, a reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.
Here's an example of a simple reducer:

    const initialState = {
      count: 0
    };

    function counterReducer(state = initialState, action) {
      switch(action.type) {
        case 'INCREMENT':
          return { ...state, count: state.count + 1 };
        case 'DECREMENT':
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    }
