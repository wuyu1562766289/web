import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item;


@Form.create()
class FormPageDecorators extends Component {
  submit = () => {
    console.log("submit", this.state);

  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        <h1>FormPageDecorators</h1>
        <Form>
          <FormItem label="姓名">
            <Input onChange={(event) => this.change("name", event)} />
          </FormItem>
          <FormItem label="密码">
            <Input type="password" onChange={(event) => this.change("password", event)} />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.submit} >提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default FormPageDecorators;