import React from 'react';
import { Table, Divider, Tag ,Button,Modal,Transfer} from 'antd';
import axios from 'axios';
import {login} from '../../services/user'
const action = (text,record)=>{
  return <div>
    <Button onClick={(text,record)=>{
        console.log(text)
      }}>权限设置</Button>

  </div>
};

const dataSource = [
  {
    key: '1',
    name: '超级管理员',
  },
  {
    key: '2',
    name: '管理员',
  },
];

class Role extends React.Component{
  operation = (record) => {
    return <div>
      <Button type="primary" size="small"
        onClick={()=>this.showModal(text,record)}
      >权限管理1</Button>,
      <Button type="primary" size="small"
        onClick={()=>this.showModal(text,record)}
      >权限管理2</Button>
    </div>
  }

  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 400,
      render: (text,record)=>(
        <div>
          <Button type="primary" size="small"
            onClick={()=>this.showModal(text,record)}
          >信息查看</Button>,
          <Button type="primary" size="small"
            onClick={()=>this.showModal(text,record)}
          >订单查看</Button>
          <Button type="primary" size="small"
            onClick={()=>this.showModal(text,record)}
          >绩效考核</Button>,
          <Button type="primary" size="small"
            onClick={()=>this.showModal(text,record)}
          >休假记录</Button>
        </div>
      ),
    },
  ];
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };


  render(){
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div style={{background:'#fff'}}>
        <Table dataSource={dataSource} columns={this.columns} bordered={true}
        pagination={false}/>
        <Modal
          title="权限管理"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default Role;
