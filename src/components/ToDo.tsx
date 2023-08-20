import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

interface ToDoProps {
  text: string;
  updateMode: () => void;
  deleteToDo: () => void;
}

export function ToDo({ text, updateMode, deleteToDo }: ToDoProps) {
  return (
    <div className="flex items-center justify-between mt-4 bg-black text-white px-12 py-6 rounded-md">
      <div>{text}</div>
      <div className="flex items-center gap-3">
        <button>
          <BiEdit onClick={updateMode} className="text-xl" />
        </button>
        <button>
          <AiFillDelete onClick={deleteToDo} className="text-xl" />
        </button>
      </div>
    </div>
  );
}
