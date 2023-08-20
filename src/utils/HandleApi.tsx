import axios from "axios";

const baseUrl = "https://todo-backend-sjwh.onrender.com";

export const getAllToDo = (
  setToDo: React.Dispatch<React.SetStateAction<any[]>>
) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(data);
    setToDo(data);
  });
};

export const addToDo = (
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  setToDo: React.Dispatch<React.SetStateAction<any[]>>
) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export const updateToDo = (
  toDoId: string,
  text: string,
  setToDo: React.Dispatch<React.SetStateAction<any[]>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export const deleteToDo = (
  _id: string,
  setToDo: React.Dispatch<React.SetStateAction<any[]>>
) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
