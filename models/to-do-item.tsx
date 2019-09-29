class ToDoItem {
  id: string;
  title: string;
  imgURL: string;
  descriptionWhy: any;
  descriptionWhere: any;
  complete: boolean;
  constructor(
    id: string,
    title: string,
    imgURL: string,
    descriptionWhy: string,
    descriptionWhere: string,
    complete: boolean
  ) {
    this.id = id;
    this.title = title;
    this.imgURL = imgURL;
    this.descriptionWhy = descriptionWhy;
    this.descriptionWhere = descriptionWhere;
    this.complete = complete;
  }
}

export default ToDoItem;
