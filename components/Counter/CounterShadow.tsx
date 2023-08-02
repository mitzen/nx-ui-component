'use client'
/* Core */
import { useState } from 'react'

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectCount,
  selectJobModel
} from '@/lib/redux'
import styles from './counter.module.css'

export const CounterShadow = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const jobModel = useSelector(selectJobModel)
  const [incrementAmount, setIncrementAmount] = useState(2)

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <span className={styles.value}>{jobModel.searchText}</span>
      </div>
    </div>
  )
}
