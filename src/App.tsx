import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ListHeader } from "./components/ListHeader";
import { Task } from "./components/Task";
import { Empty } from "./components/Empty";
import { PlusCircle } from "phosphor-react";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}
export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    if(!confirm("Deseja remover esta tarefa?")){
      return;
    }
    setTasks(filteredTasks)
  }

  function handleToggleTask({id,value}: {id:number, value:boolean}) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task, isChecked: value}
      }
      return {...task}
    })
    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.todo}>
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />

          <button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader taskCounter={tasks.length} checkedTaskCounter={checkedTasksCounter}/>

            {tasks.length > 0 ? (
              <div>
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    data={task}
                    removeTask={handleRemoveTask}
                    toggleTaskStatus={handleToggleTask}
                  />
                ))}
              </div>
            ) : (
              <Empty />
            )}
          </div>
      </section>
    </main>
  );
}
