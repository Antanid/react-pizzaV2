export type FetchType = {
    IndexCategory: string;
    sortNameRep: string;
    sortType: string;
    search: string;
    pagePagination: number;
  }
  

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
    };
    
    export type PizzaType = {
      id: string;
      imageUrl: string;
      title: string;
      types: number[];
      sizes: number[];
      price: number;
      category: number;
      rating: number;
    }
    
   export interface PizzaStateType {
      items: PizzaType[];
      status: Status
    }
    