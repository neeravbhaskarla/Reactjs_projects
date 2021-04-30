import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHTTP from '../../hooks/use-http'

const NewTask = (props) => {
  const {isLoading, error, sendRequest:sendTaskRequest } = useHTTP()
  const createTask = (taskText, taskData) =>{
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://my-react-burger-be384-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    },
    createTask.bind(null, taskText)
    )
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
