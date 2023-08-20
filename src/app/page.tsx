"use client";

import { ToDo } from "@/components/ToDo";
import { useEffect, useState } from "react";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "../utils/HandleApi";

interface ToDoProps {
  _id: string;
  text: string;
}

export default function Home() {
  const [toDo, setToDo] = useState<ToDoProps[]>([]);
  const [toDoId, setToDoId] = useState("");
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function updateMode(_id: string, text: string) {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <main className="w-full max-w-2xl mx-auto py-4">
      <h1 className="text-center text-base">ToDo App</h1>
      <section>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center gap-2 mt-4"
        >
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Add ToDo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full max-w-md outline-none p-2 border-b border-black"
          />
          <button
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </form>
      </section>
      <section>
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </section>
    </main>
  );
}
