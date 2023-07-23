"use client"
import Button from '@mui/material/Button';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import {InputGroup, MyButton} from './com';

export default function About() {
    let [counter, setCounter] = useState<number>(100)
    return <div>Hello
       <h1></h1>
       <MyButton label='test'> </MyButton>
        <Button onClick={() => setCounter(counter + 1)}>{counter}</Button>
        <InputGroup label='inputgroups label'></InputGroup>
    </div>
}
