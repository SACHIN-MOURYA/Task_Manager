import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const TaskItem = ({ task, onEdit, onMarkAsCompleted, onDelete }) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
        boxShadow: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)', // Zoom effect
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Shadow effect
        },
      }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="body2">Due Date: {task.dueDate}</Typography>
        <Typography variant="body2">Priority: {task.priority}</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          {!task.completed && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => onMarkAsCompleted(task.id)} // Mark as completed
            >
              Done
            </Button>
          )}

          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(task.id)} // Delete task
          >
            Delete
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => onEdit(task.id)} // Edit task
          >
            Edit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
