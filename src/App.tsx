import './App.css'
import goalsImg from './assets/goals.jpg'
import Header from "./components/Header.tsx";
import {useState} from "react";
import {Goal} from "./components/CourseGoalList.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

function App() {
    const [goals, setGoals] = useState<Goal[]>([]);

    function handleAddGoal(goal: string, summary: string) {
        setGoals(prevGoals => {
            const newGoal: Goal = {
                title: goal,
                description: summary,
                id: Math.random()
            };
            return [...prevGoals, newGoal];
        });
    }
    function handleDeleteGoal(id: number) {
        setGoals(prevGoals => (prevGoals.filter((goal) => goal.id !== id)));
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            {/*<button onClick={handleAddGoal}>Add Goal</button>*/}
            <NewGoal onAddGoal={handleAddGoal}></NewGoal>
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        </main>
    )
}

export default App

