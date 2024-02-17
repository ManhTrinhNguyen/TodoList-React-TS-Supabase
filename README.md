# React + TypeScript + Vite + Supabase 
# App Name 
TODO List 

## Logic of the App 
1. Data structure : posts [
  {
    id: number,
    todo: string,
    created_at: string,
    completed: boolean
  }
]

### Fetch Posts
2. Using RTK createSyncThunk to fetch posts from DB (supabase)
3. Create reducer to handle Logic of the state . isLoading | fullfiled | error
4. Use useDispatch to dispatch action . return action.payload is Posts[]
5. Use useSelector to select state Value from the store

### Add Posts
6. Using RTK createSyncThunk to fetch posts to DB (supabase)
7. Create reducer to handle Logic of the state . isLoading | fullfiled | error


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


### Submitting a PR
If you are not familiar with the PR process, let us take this opportunity to introduce you to one of the most essential aspects of collaborative software development. Here's a simple and clear explanation:

"Pull Requests (PRs) on GitHub are a core feature that facilitates code review and collaboration in software development. Let's break it down:

### What is a Pull Request?
A Pull Request is essentially a request to merge code from one branch (typically a development branch) into another (usually the main branch).
It's like saying, 'I've made some changes in this branch, can we review and then merge it into the main codebase?'
Why Use Pull Requests?
Code Review: PRs allow team members to review code changes before they are merged. This is crucial for maintaining code quality and consistency. When learning to code, this is a great chance for everyone participating to offer insights and ask questions to build the knowledge of all involved.
Collaboration: They facilitate discussion about the code. Team members can comment, suggest changes, or ask questions directly on the PR.
Track Changes: PRs provide a clear history of what changes were made and why, which is valuable for tracking project progress.

### How Does It Work?
Branching: You start by creating a new branch from the main codebase using git. This branch where you'll make your changes.
Making Changes: After you've made your changes in this branch, commit them and push the branch to GitHub.
Creating the Pull Request: On GitHub, you then open a new PR from your branch. Add a title to summarize your work, a great description to summarize what others can expect to see, why you coded what you did, etc. You can invite reviewers to your PR.
Review Process: Your team reviews the code, discussing and possibly requesting changes. You and others can make further commits to the branch if needed.
Merging: Once everyone is content with the changes on the branch, the PR gets approved, and the code is merged into the main branch where the process of branching an updating hopefully continue for a long time.

### Best Practices:
Descriptive Titles: Use clear titles and descriptions for your PRs so that team members can quickly understand what the PR is about.
Detailed Descriptions: Explain what changes you've made and why. This helps reviewers understand your reasoning.
Small, Focused Changes: Smaller PRs are easier to review than large ones. Try to keep your changes focused on a specific feature or fix.
Respond to Feedback: Be responsive to comments and feedback from your reviewers.
Pull Requests are not mainly about merging code; they're about communication and collaboration. They're often the best way for you and the team to work together to produce the best possible software.

