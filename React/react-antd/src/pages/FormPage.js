import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
// import 

const FormItem = Form.Item;

export default class FormPage extends Component {
  render() {
    return (
      <div>
        <h1>FormPage</h1>

        <Form>
          <FormItem label="姓名">
            <Input />
          </FormItem>
          <FormItem label="密码">
            <Input type="password" />
          </FormItem>
          <FormItem>
            <Button type="primary">提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
