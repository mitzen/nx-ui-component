import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps: GetServerSideProps<{
  repo: Repo
}> = async () => {
  
  console.log("executing getServerSideProps");
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  console.log(repo);
  return { props: { repo } }
}

export default function Page({
    repo
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
    return (
     <>
     <p> hello there</p>
     </>
    )
}