import styles from "./Empty.module.css"
import clipboard from "../assets/clipboard.png"

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="" />
      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
