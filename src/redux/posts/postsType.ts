export interface Posts {
  id: number;
  created_at: string;
  todo: string;
  completed: boolean 
}

export interface InitialState {
  posts: Posts[] | null;
  isLoading: boolean;
  error: string | undefined
}