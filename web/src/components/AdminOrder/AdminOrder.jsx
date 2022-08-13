import React from 'react'


export const AdminOrder = () => {
    const AdminOrder=async (event)=>{
    event.preventDefault();
    const response =await fetch("http://localhost:4000/admin",{
    method:"GET",    
    credentials: 'include',
    headers: {
     "Content-Type": "application/json",
     },   
    })

    }
    return (
 <>
<button onClick={AdminOrder} type="button" className="btn btn-primary">выгрузить Заказы </button>
   
            <tbody>
                <tr>
                    <th>№</th>
                    <th>Имя покупателя|</th>
                    <th>Устройство|</th>
                    <th>Цена|</th>
                    <th>Количество|</th>
                    <th>Общая стоимость|</th>
                    <th>Статус заказа|</th>
                </tr>
            </tbody>
</>

            )
}
