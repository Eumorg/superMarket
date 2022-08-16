import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useForm } from "react-hook-form";

export const AdminOrder = () => {
  const [ordersAdmin, setOrdersAdmin] = useState([]);
  const { handleSubmit, register } = useForm();

  async function AdminOrders(event) {
    // event.preventDefault();
    const response = await fetch("http://localhost:4000/orders", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setOrdersAdmin(data);
  }

  useEffect(() => {
    AdminOrders();
  }, []);

<<<<<<< HEAD
    useEffect(() => { AdminOrders() }, [])

    function getList() {
        let list = ordersAdmin;
        let arr = [];
            for (let i = 0; i < list.length; i++) {
            let obj = {
                id: list[i].id,
                status: list[i].status,
                user: list[i]["User.name"],
                created: list[i].createdAt,
                updated: list[i].updatedAt,
                device: [list[i]["Carts.Device.model"]],
            };
            arr.push(obj);
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].id === arr[j].id) {
                    arr[i].device = arr[i].device.concat(arr[j].device);
                    arr[j].device = arr[i].device;
                }
            }
=======
  function getList() {
    // let list = orders.filter((el) => el["User.name"] === user.payload);
    let list = ordersAdmin;
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      let obj = {
        id: list[i].id,
        status: list[i].status,
        user: list[i]["User.name"],
        created: list[i].createdAt,
        updated: list[i].updatedAt,
        device: [list[i]["Carts.Device.model"]],
      };
      arr.push(obj);
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].id === arr[j].id) {
          arr[i].device = arr[i].device.concat(arr[j].device);
          arr[j].device = arr[i].device;
>>>>>>> dev
        }
      }
    }
<<<<<<< HEAD
    let list = getList();
   
    const onSubmit=async(values)=>{
            let lists=[]
        for (let i=0;i<list.length;i++){
            lists.push({id: list[i]?.id, status:list[i]?.status })
        }     
            const response = await fetch('http://localhost:4000/orders', {
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
           
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Table>
            <thead>
                <tr>
                    <th>№ заказа</th>
                    <th>Имя покупателя</th>
                    <th>Статус заказа</th>
                    <th>Время создания заказа</th>
                    <th>Время обновления заказа</th>
                </tr>
            </thead>
            <tbody>
                {list.map((el) => (
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.user}</td>
                        <td>
                               <select {...register(`${el.id}`)} >
                                <option value="Создан" >{el.status}</option>
                                <option value="Оплачен">Оплачен</option>
                                <option value="Собирается">Собирается</option>
                                <option value="Отправлен">Отправлен</option>
                                <option value="Выполнен">Выполнен</option>
                                </select>                           
                        </td>
                        <td>{el.created.slice(0,10)}</td>
                        <td>{el.updated.slice(0,10)}</td>
                    </tr>
                ))}
            </tbody>
            <button type="submit">Сохранить</button>
        </Table>
  </form>
=======

    let uniqueObjArray = [
      ...new Map(arr.map((item) => [item["id"], item])).values(),
    ];
    return uniqueObjArray;
  }
  let list = getList();
  console.log(list);

  const onSubmit = async (values) => {
    let lists = [];
    for (let i = 0; i < list.length; i++) {
      lists.push({ id: list[i]?.id, status: list[i]?.status });
    }
    const response = await fetch("http://localhost:4000/orders", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(values);
  };
>>>>>>> dev

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Table>
        <thead>
          <tr>
            <th>№ заказа</th>
            <th>Имя покупателя</th>
            <th>Статус заказа</th>
            <th>Время создания заказа</th>
            <th>Время обновления заказа</th>
          </tr>
        </thead>
        <tbody>
          {list.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.user}</td>
              <td>
                <select {...register(`${el.id}`)}>
                  <option value="Создан">Создан</option>
                  <option value="Оплачен">Оплачен</option>
                  <option value="Собирается">Собирается</option>
                  <option value="Отправлен">Отправлен</option>
                  <option value="Выполнен">Выполнен</option>
                </select>
              </td>
              <td>{el.created.slice(0, 10)}</td>
              <td>{el.updated.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button type="submit">Сохранить</button>
    </form>
  );
};
