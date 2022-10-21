import { Task } from "../interfaces/task.interface";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark ">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <div className="position-relative">
        <button
          className="btn btn-danger position-relative bottom-0 start-50 translate-middle-x"
          onClick={() => task.id && deleteATask(task.id)}
        >
          Delete <AiFillDelete />{" "}
        </button>
      </div>
    </div>
  );
}
