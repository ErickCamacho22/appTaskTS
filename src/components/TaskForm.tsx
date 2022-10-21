import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/task.interface";

interface Props {
    addANewTask: (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
    title: "",
    description: "",
}

export default function TaskForm({addANewTask}: Props) {
  const [task, setTask] = useState(initialState);
  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({...task, [name]: value});
  };
  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
  } 
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Añadir Tarea</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Escribe un titulo"
          name="title"
          className="from-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={3}
          placeholder="Escribe una descripción"
          className="from-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <div className="position-relative">
          <button className="btn btn-primary position-relative bottom-0 start-50 translate-middle-x">
            Save
            <AiOutlinePlus />
          </button>
        </div>
      </form>
    </div>
  );
}
