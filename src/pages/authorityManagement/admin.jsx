import React from 'react';
import { Table, Divider, Tag ,Button,Modal,Card,Input,Select} from 'antd';
import axios from 'axios';
import {login} from '../../services/user';
import style from './index.less';
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
    number: '32423423',
    name:'张三',
    user:'赵有钱',
    role:'咸蛋超人'
  },
  {
    key: '2',
    number: '32423423',
    name:'张三',
    user:'赵有钱',
    role:'咸蛋超人'
  },
  {
    key: '3',
    number: '32423423',
    name:'张三',
    user:'赵有钱',
    role:'咸蛋超人'
  },
  {
    key: '4',
    number: '32423423',
    name:'张三',
    user:'赵有钱',
    role:'咸蛋超人'
  },
];

class Role extends React.Component{
  columns = [
    {
      title: '管理员编号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'user',
    },
    {
      title: '姓名',
      dataIndex: 'user',
      key: 'name',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (text,record)=>(
        <Button type="primary" size="small"
          onClick={()=>this.showModal(record)}
          >编辑</Button>
      ),
    },
  ];
  state = {
    visible: false,
    confirmLoading: false,
    information:{}
  };

  showModal = (record) => {
    this.setState({
      visible: true,
      information:record
    });
  };
  handleOk = () => {
    this.setState({
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
  // admin information
  details = () => {

  };
  render(){
    const { visible, confirmLoading ,information} = this.state;
    const { TextArea } = Input;
    const { Option } = Select;

    return (
      <div style={{background:'#fff'}}>
        <Table dataSource={dataSource} columns={this.columns} bordered={true}
        />
        <Modal
          title="权限管理"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <div>
            <Card style={{  }}>
              <div className={style.ipt}>
                <div className={style.label}>帐号</div>
              <div className={style.text}>{information.name}</div>
              </div>
              <div className={style.ipt}>
                <div className={style.label}>角色</div>
                <div className={style.text}>
                  <Select defaultValue="2" style={{ }}>
                    <Option value="1">管理员</Option>
                    <Option value="2">超级管理员</Option>
                  </Select>
                </div>
              </div>
              <div className={style.ipt}>
                <div className={style.label}>电话</div>
                <div className={style.text}>
                  <Input placeholder="请输入练习方式" defaultValue={information.number} />
                </div>
              </div>
              <div className={style.ipt}>
                <div className={style.label}>性别</div>
                <div className={style.text}>
                  <Select defaultValue="Http://" style={{ }}>
                    <Option value="Http://">Http://</Option>
                    <Option value="Https://">Https://</Option>
                  </Select>
                </div>
              </div>
              <div className={style.ipt}>
                <div className={style.label}>地址</div>
              <div className={style.text}><Input placeholder="请输入地址" defaultValue={information.role} /></div>
              </div>
              <div className={style.ipt}>
                <div className={style.label}>备注</div>
                <div className={style.text}>
                  <TextArea rows={2} defaultValue={information.name} />
                </div>
              </div>
            </Card>
          </div>
        </Modal>
      </div>
    )
  }
}
export default Role;
