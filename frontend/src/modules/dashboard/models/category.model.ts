export interface Category {
    name :string;
    parent : string; //object_id_of_parent
}
export interface fetchedCategory{
    _id:string,
    name:string,
    parent:string
}