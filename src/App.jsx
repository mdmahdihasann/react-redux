// import Counter from "./components/Counter";
// import Stats  from "./components/Stats";
import { useState } from "react";
import Posts from "./components/Posts";
// import { useSelector } from "react-redux";
// import { decrement, increment } from "./features/counters/redux";


export default function App() {
    const [showPosts, setShowposts] = useState();
    // const counters = useSelector((state) => state.counters);
    // const dispatch = useDispatch();

    // const handleIncrement = (counterId) => {
    //     dispatch(increment(counterId))
    // }
    // const handleDecrement = (counterId) => {
    //     dispatch(decrement(counterId))
    // }
    
    // const totalCount = counters.reduce((sum, cur) => sum + cur.value, 0);

    return (
        <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple RTK Query Application
            </h1>

            <div onClick={()=>setShowposts((prevState) => !prevState )} className="max-w-md mx-auto mt-10 space-y-5">
                <button className="text-white bg-red-900 py-2 px-4 rounded font-bold">Toggole</button>
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                {/* {counters.map(counter => 
                    <Counter key={counter.id} count={counter.value} 
                    onIncrimate={()=> handleIncrement(counter.id)}  
                    onDecrimat={()=> handleDecrement(counter.id)} />
                )}
                <Stats totalCount={totalCount}/> */}
                { showPosts && <Posts/>}
            </div>
        </div>
    );
}
