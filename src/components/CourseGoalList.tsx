import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import {Fragment, ReactNode} from "react";

export interface Goal {
    title: string,
    description: string,
    id: number
}

interface CourseGoalListProps {
    goals: Goal[]
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({goals, onDeleteGoal}: CourseGoalListProps) => {
    if (goals.length === 0) {
        return (<InfoBox mode={'hint'}><p>You haven't set any goals yet!</p></InfoBox>)
    }
    let warningBox: ReactNode;
    if (goals.length >= 6) {
        warningBox = <InfoBox mode={'warning'} severity={'medium'}><p>You're probably setting more goals than you can handle!</p></InfoBox>
    }
    return (
        <Fragment>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                            {goal.description}
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </Fragment>

    );
}

export default CourseGoalList;