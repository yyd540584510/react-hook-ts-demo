import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid'
import { Button, Card, Modal } from 'antd'

import './ui.css'
import 'antd/dist/antd.css'


function App() {

  const [modalAddInfoVisible, setModalAddInfoVisible] = useState(false)
  const [todoObj, setTodoObj] = useState({id:'',num:0})
  const [nums, setNums] = useState([
    { id: nanoid(), num: Math.ceil(Math.random() * 10) },
    { id: nanoid(), num: Math.ceil(Math.random() * 10) },
    { id: nanoid(), num: Math.ceil(Math.random() * 10) },
    { id: nanoid(), num: Math.ceil(Math.random() * 10) },
    { id: nanoid(), num: Math.ceil(Math.random() * 10) }
  ])

  useEffect(() => {

  }, []);

  const openModalAddInfo = (num:any) => {
    setModalAddInfoVisible(true)
    setTodoObj(num)
  }

  function increment(){
    //获取原todos
    var newNums = nums.map((num, index) => {
      return num.id === todoObj.id ? { id: todoObj.id, num: todoObj.num + 1 } : num;
    })
    //更新状态
    setModalAddInfoVisible(false)
    setTodoObj({id:'',num:0})
    setNums(newNums)
  }

  const decrement = () => {
    var newNums = nums.map((num, index) => {
      return num.id === todoObj.id ? { id: todoObj.id, num: todoObj.num - 1 } : num;
    })

    setModalAddInfoVisible(false)
    setTodoObj({id:'',num:0})
    setNums(newNums)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Card title="测试">
        {
          nums.map(num => (
            <Button className="button" key={num.id} type="primary" onClick={() => openModalAddInfo(num)}>{num.num}</Button>
          ))
        }
      </Card>


      <Modal title="测试+1"
        visible={modalAddInfoVisible}
        footer={null}
        onOk={() => {
          setModalAddInfoVisible(false)
        }}
        onCancel={() => {
          setModalAddInfoVisible(false)
        }}
      >
        <div>当前点击的数字:<span style={{ fontSize: '28px', color: 'red' }}>{todoObj.num}</span></div><div style={{ textAlign: 'center' }}><span><Button className="button" type="primary" onClick={increment}>+1</Button><Button className="button" type="primary" onClick={decrement}>-1</Button></span></div>
      </Modal>
    </div>
  );
}

export default App;
