import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "redux/constants";

export const TaskList = () => {
  const task = useSelector(state=>state.task)
  const filterStatus = useSelector(state=>state.filters.status)
 const vidibleTask =  task.filter((task)=>{
    switch (filterStatus) {
      case statusFilters.active:
        return !task.completed;
        case statusFilters.cimplited:
          return task.completed ;
 
    
      default:
        return task;
    }
  })
  return (
    <ul className={css.list}>
      {vidibleTask.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
