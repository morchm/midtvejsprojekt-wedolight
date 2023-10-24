export interface aboutContent {
  content: Content[];
}

export interface Content {
    element: string;
    id: string;
    children: childContent
  }
  
export interface childContent {
    element: string
    innerHTML: string
}