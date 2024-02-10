import cls from './about.module.css';
import { useEffect, useState } from "react";

const About = () => {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

    const onInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }

    const increaseCount = () => {
        setCounter(counter + 1);
    }

    const decreaseCount = () => {
        counter === 0 ? setCounter(counter) : setCounter(counter - 1);
    }

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resp => resp.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        fetchData();
    }, [setData])

    return (
        <div className={cls.wrapper}>
            <input onChange={onInputChange} value={inputValue} type="text" placeholder='type something...' />
            <p>{counter}</p>
            <button onClick={increaseCount}>Increase +++</button>
            <button onClick={decreaseCount}>Decrease ---</button>
            {
                data.map((el, i) =>
                    <p className={cls.element} key={i}>{el.title}</p>
                )
            }
        </div>
    )
};

export default About;