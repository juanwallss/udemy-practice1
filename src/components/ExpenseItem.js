import { Card } from './Card'
import React, { useState } from 'react'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'

export function ExpenseItem(props) {
    const [title, setTitle] = useState(false);
   const clickHandler = () => {
        if(title){
            setTitle(props.title)
        }else{
            setTitle("Updated")
        }
   } 
  
    return (
      
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title ? title : props.title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Eliminar</button>
        </Card>
   
    )
}
