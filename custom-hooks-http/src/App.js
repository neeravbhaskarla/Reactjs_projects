import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const transformTasks = (taskObj) =>{
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }
  
  const {isLoading, error, sendRequest: fetchTasks} = useHTTP()

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {
    fetchTasks({ url: 'https://my-react-burger-be384-default-rtdb.firebaseio.com/tasks.json'},transformTasks);
  },[fetchTasks]);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
