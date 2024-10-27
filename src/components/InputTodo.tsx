import { PlusCircle } from "phosphor-react"
import styles from "./InputTodo.module.css"
import { useState } from "react"

interface ITask {
  id: number
  title: string
  isChecked: boolean
}
export function InputTodo() {

  return (
    <div className={styles.todo}>
      <input 
        placeholder="Adicione uma nova tarefa" 
        onChange={(e)=>{
        console.log(e.target.value)
        }}
      />
      
      <button onClick={() => {}}>
        Criar
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </div>
  )
}
