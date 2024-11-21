import './Task.css';

const Task = ({task}) => {
    return (
        <div className="Task">
            <input type="checkbox" checked={task.completed}/>
            <p>{task.text}</p>
            <button>Remove</button>
        </div>
    );
}

export default Task;
