
import { NextResponse } from 'next/server'
 
export async function GET() {
  let products = { data: [
    {"id": "1", "name":"product1", "description": "product1"},
    {"id": "2", "name":"product2", "description": "product2"},
    {"id": "3", "name":"product3", "description": "product3"},
    {"id": "4", "name":"product4", "description": "product4"}
  ]};
  
  return NextResponse.json({ products })
}

export async function POST() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data = await res.json();
    return NextResponse.json({ data })
}
