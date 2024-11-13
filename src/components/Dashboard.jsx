import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all'); // 'all', 'high', 'medium', 'low'
  const [currentTask, setCurrentTask] = useState(null);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleClick = () => {
    setOpenForm(true);
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setOpenForm(false);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setOpenForm(false);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setCurrentTask(taskToEdit); // Populate the form with the selected task
    setOpenForm(true); // Open the form in edit mode
  };

  const handleMarkAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  // Filter tasks based on the search query and priority filter
  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((task) => {
      if (priorityFilter === 'all') return true;
      return task.priority.toLowerCase() === priorityFilter.toLowerCase();
    });

  // Function to check if a task is overdue
  const isOverdue = (dueDate) => {
    const currentDate = new Date();
    const taskDueDate = new Date(dueDate);
    return taskDueDate < currentDate;
  };

  // Classify tasks into upcoming and overdue
  const classifyTasks = (task) => {
    if (!task.completed) {
      return isOverdue(task.dueDate) ? 'Overdue' : 'Upcoming';
    }
    return null; // Completed tasks are not classified into these categories
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleClick}
        >
          Add Task
        </Button>
        
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Priority</InputLabel>
          <Select
            value={priorityFilter}
            onChange={handlePriorityChange}
            label="Priority"
            sx={{ width: 150 }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Search By Title"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: 250 }}
        />
      </Box>

      {openForm && (
        <TaskForm
          setOpenForm={setOpenForm}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          currentTask={currentTask}
        />
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
        <Box
          sx={{
            width: '30%',
            backgroundColor: '#E3F2FD', // Light Blue for Upcoming tasks
            padding: 2,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <h3>Upcoming Tasks</h3>
          {filteredTasks
            .filter((task) => classifyTasks(task) === 'Upcoming')
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onMarkAsCompleted={handleMarkAsCompleted}
                onDelete={handleDeleteTask}
              />
            ))}
        </Box>

        <Box
          sx={{
            width: '30%',
            backgroundColor: '#FFEBEE', // Light Red for Overdue tasks
            padding: 2,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <h3>Overdue Tasks</h3>
          {filteredTasks
            .filter((task) => classifyTasks(task) === 'Overdue')
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onMarkAsCompleted={handleMarkAsCompleted}
                onDelete={handleDeleteTask}
              />
            ))}
        </Box>

        <Box
          sx={{
            width: '30%',
            backgroundColor: '#C8E6C9', // Light Green for Completed tasks
            padding: 2,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <h3>Completed Tasks</h3>
          {filteredTasks
            .filter((task) => task.completed)
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onMarkAsCompleted={handleMarkAsCompleted}
                onDelete={handleDeleteTask}
              />
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
