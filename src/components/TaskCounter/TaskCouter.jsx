import { useSelector } from "react-redux";
import css from "./TaskCouter.module.css";

export const TaskCounter = () => {
  const task = useSelector(state=>state.tasks)
  const count  = task.reduce((acc, task)=>{
    if(task.compledet ){
      acc.compledet += 1
    } else{
      acc.active += 1
    }
    return acc
  }, {active: 0, compledet:0})
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.compledet}</p>
    </div>
  );
};
