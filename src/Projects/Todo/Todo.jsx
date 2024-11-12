import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodo, setLocalStorageTodo } from "./TodoLocalStorage";

export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodo())

    setLocalStorageTodo(task)

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue

        if (!content) return

        // if (task.includes(inputValue)) return
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
        if (ifTodoContentMatched) return

        setTask((prevTask) => {
            // console.log(prevTask);
            return (
                // [...prevTask, inputValue]
                [...prevTask, { id: id, content: content, checked: checked }]
            )
        })

    }

    const handleTodoDelete = (value) => {
        // console.log(task);
        // console.log(value);
        const updatedTask = task.filter((curTask) => {
            return curTask.content !== value
        })
        // console.log(updatedTask);
        setTask(updatedTask)
    }

    const handleClearTodoData = () => {
        setTask([])
    }

    const handleCheckTodo = (value) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === value) {
                return { ...curTask, checked: !curTask.checked }
            }
            else {
                return curTask
            }
        })
        setTask(updatedTask)
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                {/* <TodoDate /> */}

            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleTodoDelete}
                                    onHandleCheckedTodo={handleCheckTodo} />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}