import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
// import 

const FormItem = Form.Item;

export default class FormPage extends Component {
  change = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  }
  submit = () => {
    console.log("submit", this.state);
    
  }

  render() {
    // const {name, password} = this.state;

    return (
      <div>
        <h1>FormPage</h1>
        <Form>
          <FormItem label="姓名">
            <Input onChange={(event)=>this.change("name", event)} />
          </FormItem>
          <FormItem label="密码">
            <Input type="password" onChange={(event)=>this.change("password", event)}  />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.submit} >提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}