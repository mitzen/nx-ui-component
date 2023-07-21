"use client"
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function About() {
    let [counter, setCounter] = useState<number>(100)
    return <div>Hello
        <Button onClick={() => setCounter(counter + 1)}>{counter}</Button>
    </div>
}
