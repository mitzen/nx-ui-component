import { HiringContainer } from "@/components/containers/hiringparty/hiringPartyContainer"
import { Suspense } from 'react'

export default function Page() {
  return (
   <>
       <Suspense fallback={<p>Loading feed...</p>}>
     <HiringContainer description="test1" info="test1" jobDescription="test1" title="test1" delay={1000} />
     </Suspense>
  <Suspense fallback={<p>Loading feed...</p>}>
     <HiringContainer description="test2" info="test2" jobDescription="test2" title="test2" delay={10000} />
   </Suspense>
   </>
  )
}