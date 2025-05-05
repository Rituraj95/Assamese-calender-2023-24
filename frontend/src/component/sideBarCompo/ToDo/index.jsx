import React, { useState } from 'react';
import { FiCheck, FiTrash2, FiPlus } from 'react-icons/fi';

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Complete project documentation', completed: false },
        { id: 2, text: 'Review pull requests', completed: true },
        { id: 3, text: 'Update dependencies', completed: false }
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, {
                id: Date.now(),
                text: newTodo,
                completed: false
            }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>

            <div className="todo-input">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo}>
                    <FiPlus />
                </button>
            </div>

            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? <FiCheck className="checked" /> : <span className="checkbox" />}
                {todo.text}
            </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            <FiTrash2 />
                        </button>
                    </li>
                ))}
            </ul>

            <style jsx>{`
        .todo-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        h1 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .todo-input {
          display: flex;
          margin-bottom: 20px;
        }
        
        .todo-input input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 16px;
          outline: none;
        }
        
        .todo-input button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 0 20px;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        
        .todo-input button:hover {
          background-color: #2980b9;
        }
        
        .todo-list {
          list-style: none;
          padding: 0;
        }
        
        .todo-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 15px;
          background-color: #f9f9f9;
          margin-bottom: 8px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .todo-list li:hover {
          background-color: #f0f0f0;
        }
        
        .todo-list li.completed {
          background-color: #e8f8f5;
        }
        
        .todo-list li span {
          display: flex;
          align-items: center;
          cursor: pointer;
          flex: 1;
        }
        
        .checkbox {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid #3498db;
          border-radius: 3px;
          margin-right: 10px;
        }
        
        .checked {
          color: #2ecc71;
          margin-right: 10px;
          font-size: 18px;
        }
        
        .todo-list li.completed span {
          color: #7f8c8d;
          text-decoration: line-through;
        }
        
        .todo-list li button {
          background: none;
          border: none;
          color: #e74c3c;
          cursor: pointer;
          font-size: 16px;
          margin-left: 10px;
        }
        
        .todo-list li button:hover {
          color: #c0392b;
        }
      `}</style>
        </div>
    );
};

export default Todo;