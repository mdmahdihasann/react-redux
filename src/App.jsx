
import Counter from "./components/Counter";
import Stats  from "./components/Stats";
import Posts from "./components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/redux";


export default function App() {
    const counters = useSelector((state)=> state.counters);
    const dispatch = useDispatch();

    const handleIncrement = (counterId) => {
        dispatch(increment(counterId))
        // const updateCounts = counts.map((c) =>{
        //     if(c.id === counterId){
        //         return {
        //             ...c,
        //             value: c.value + 1,
        //         }
        //     }
        //     return c;
        // })
        // setCounters(updateCounts);
    }
    const handleDecrement = (counterId) => {
        dispatch(decrement(counterId))
        // const updateCounts = counts.map((c) =>{
        //     if(c.id === counterId){
        //         return {
        //             ...c,
        //             value: c.value - 1,
        //         }
        //     }
        //     return c;
        // })
        // setCounters(updateCounts);
    }
    
    const totalCount = counters.reduce((sum, cur) => sum + cur.value, 0)

    return (
        <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {counters.map(counter => 
                    <Counter key={counter.id} count={counter.value} 
                    onIncrimate={()=> handleIncrement(counter.id)}  
                    onDecrimat={()=> handleDecrement(counter.id)} />
                )}
                <Stats totalCount={totalCount}/>
                <Posts/>
            </div>
        </div>
    );
}
