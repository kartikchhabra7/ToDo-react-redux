import {
  useState,
  useDispatch,
  useSelector,
  showErrorNotification,
  showSuccessNotification,
  addTodo,
  deleteTodo,
  removeTodo,
  Toastify,
} from "../../import/imports";

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const changeEvent = (event) => setInputValue(event.target.value);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.toDoReducer.list);

  function addData() {
    if (inputValue === "") {
      showErrorNotification("🦄Data Can't be empty..");
    } else {
      dispatch(addTodo(inputValue));
      setInputValue("");
      showSuccessNotification("Congrats! Data Added..");
    }
  }

  function deletAllData() {
    if (list) {
      dispatch(removeTodo());
      showErrorNotification("All data Deleted");
    }
  }
  return (
    <>
      <div className="text-center mt-5">
        <input
          type="text"
          value={inputValue}
          onChange={changeEvent}
          placeholder="enter any note..."
        />
        <button onClick={addData} className="mx-2 add-btn">
          <span>➕</span>{" "}
        </button>
        &nbsp;
        {list.map((value) => {
          return (
            <div key={value.id}>
              <h4>
                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      deleteTodo(value.id),
                      showErrorNotification(`Data ${value.data} deleted...`)
                    )
                  }
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                &nbsp; {value.data}
              </h4>
            </div>
          );
        })}
        {list.length > 0 && (
          <button
            onClick={deletAllData}
            className="btn btn-warning mt-3"
          >
            DeleteAll
          </button>
        )}
      </div>

      
      {/* FOR TOASTIFY */}
      <Toastify />
    </>
  );
}

export default ToDo;
