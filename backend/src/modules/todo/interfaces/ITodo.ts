export interface ITodo {
  id: number;
  userId: number;
  title: string | null;
  content: string | null;
  isArchived: boolean;
  isDeleted: boolean;
  color: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateTodo {
  userId: number;
  title?: string;
  content?: string;
  isArchived?: boolean;
  isDeleted?: boolean;
  color?: string;
}

export interface IUpdateTodo {
  title?: string;
  content?: string;
  isArchived?: boolean;
  isDeleted?: boolean;
  color?: string;
}