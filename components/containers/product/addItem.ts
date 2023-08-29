'use server';
import { cookies } from 'next/headers'

export async function addItem() {
    const cartId = cookies().get('cartId')?.value;
    const res = await fetch('http://localhost:3000/api/product');
    const data = await res.json();
    console.log(cartId);
}