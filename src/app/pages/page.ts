export class Page {
    id: number;
    title:string;
    slug:string; 
    layoutId: number;
    contents:
        { id: number; 
            createdOn:string; 
            modifiedOn:string; 
            body:string; 
            publishedDate:string; 
            userId:number; 
            pageId:number; 
            pageContentAreaId:number; 
        }[];
    body:string;
    children: any[]
}