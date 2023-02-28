export type SortTypeState = {
    sortName: string;
     sortIndex: number;
   }
   
   export interface filterTypeState {
     searchValue: string;
     paginationNumber: number;
     categoryIndex:number;
     sort: SortTypeState;  
   }