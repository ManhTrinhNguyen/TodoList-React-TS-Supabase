import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from './posts/postsSlice';
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  posts: postReducer
})
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
