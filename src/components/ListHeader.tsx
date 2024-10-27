import styles from "./ListHeader.module.css";

interface ListHeader {
  taskCounter: number;
  checkedTaskCounter: number;
}

export function ListHeader({ taskCounter, checkedTaskCounter }:ListHeader) {
  return (
    <header className={styles.container}>
      <aside className={styles.status}>
        <p className={styles.existing}>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </aside>

      <aside className={styles.status}>
        <p className={styles.completed}>Concluídas</p>
        <span>
          {taskCounter === 0
            ? taskCounter
            : `${checkedTaskCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  );
}
