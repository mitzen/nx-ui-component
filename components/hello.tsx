"use client"
import Button from '@mui/material/Button';
import { useState } from 'react';
import {InputGroup, MyButton} from './com';

export function About() {
    let [counter, setCounter] = useState<number>(100)
    return <div>Hello therre about button 
    <h1>test</h1>
    <MyButton label='test'> </MyButton>
    <Button onClick={() => setCounter(counter + 1)}>{counter}</Button>
    <InputGroup label='inputgroups label'></InputGroup>
    </div>
}
