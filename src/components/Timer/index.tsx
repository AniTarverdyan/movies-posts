import { FC } from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer();


export const TimerViewA: FC = observer((props: any) => {
    const { timer } = props;

    return (
        <div>
            Seconds passed: {timer?.secondsPassed}
        </div>
    )
})
export const TimerView = () => {
    return <TimerViewA timer={myTimer}/>
}


setInterval(() => {
    myTimer.increaseTimer()
}, 1000)