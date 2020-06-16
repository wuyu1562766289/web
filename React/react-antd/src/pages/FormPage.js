import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import Password from 'antd/lib/input/Password';
// import FormItem from 'antd/lib/form/FormItem';
// import 

// const FormItem = Form.Item;

// 校验规则
const nameRules = { required: true, message: "请输入用户名！" };
const passwordRules = { required: true, message: "请输入密码！" };

@Form.create()
class FormPage extends Component {
  // change = (field, event) => {
  //   this.setState({
  //     [field]: event.target.value,
  //   });
  // }
  // submit = () => {
  //   console.log("submit", this.state);    
  // }

  handleSubmit = () => {
    const { validateFields } = this.props.form;

    validateFields((err, values) => {
      if(err) {
        console.log("err", err);        
      } else {
        console.log("handleSubmit:", values);
      }
    })
  }

  render() {
    // const {name, password} = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h1>FormPage</h1>
        {/* <Form>
          <FormItem label="姓名">
            <Input onChange={(event)=>this.change("name", event)} />
          </FormItem>
          <FormItem label="密码">
            <Input type="password" onChange={(event)=>this.change("password", event)}  />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.submit} >提交</Button>
          </FormItem>
        </Form> */}
        <Form>
          <Form.Item label="姓名">
            {
              getFieldDecorator("name", { rules: [nameRules] })(<Input />)
            }
          </Form.Item>
          <Form.Item label="密码">
            {
              getFieldDecorator("password", { rules: [passwordRules] })(<Input type="password" />)
            }
          </Form.Item>
          <Button onClick={this.handleSubmit}>提交</Button>
        </Form>
      </div>
    )
  }
}

export default FormPage;