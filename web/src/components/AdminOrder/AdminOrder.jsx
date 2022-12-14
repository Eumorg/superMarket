import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";

export const AdminOrder = () => {
  const [ordersAdmin, setOrdersAdmin] = useState([]);
  const { handleSubmit, register } = useForm();

  async function AdminOrders(event) {
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
    }

    let uniqueObjArray = [
      ...new Map(arr.map((item) => [item["id"], item])).values(),
    ];
    return uniqueObjArray;
  }
  let list = getList();

  const onSubmit = async (values) => {
    let lists = [];
    for (let i = 0; i < list.length; i++) {
      lists.push({ id: list[i]?.id, status: list[i]?.status });
    }
    await fetch("http://localhost:4000/orders", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <Container>
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
                    <option value="Создан">{el.status}</option>
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
    </Container>
  );
};
