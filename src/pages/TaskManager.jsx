import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '', assignedTo: '', dueDate: '' });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tasks', newTask);
      setTasks((prev) => [...prev, response.data]);
      setNewTask({ name: '', description: '', assignedTo: '', dueDate: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
      <form onSubmit={handleAddTask} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Task Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border p-2 rounded-md"
            value={newTask.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full border p-2 rounded-md"
            value={newTask.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assignedTo" className="block text-sm font-medium">Assigned To</label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            className="w-full border p-2 rounded-md"
            value={newTask.assignedTo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            className="w-full border p-2 rounded-md"
            value={newTask.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Task
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      {tasks.map((task) => (
        <div key={task._id} className="p-4 border rounded-md mb-4">
          <h3 className="font-bold">{task.name}</h3>
          <p>{task.description}</p>
          <p><strong>Assigned To:</strong> {task.assignedTo}</p>
          <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskManager;
