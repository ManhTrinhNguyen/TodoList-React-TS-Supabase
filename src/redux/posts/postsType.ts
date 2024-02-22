export interface Posts {
  id: number;
  created_at: string;
  todo: string;
  completed: boolean;
  user_id: number
}

export interface InitialState {
  posts: Posts[] | null;
  isLoading: boolean;
  error: string | undefined
}