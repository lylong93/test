import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
        }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form  onSubmit={this.handleSubmit}>
        <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
            >
          {getFieldDecorator('userName', {
                rules: [{
                    required: true,
                    message: 'Please input your username!'
                }],
            })(
                <Input prefix={<Icon type="user" style={{
                    fontSize: 13
                }} />} placeholder="Username" />
            )}
        </FormItem>
        <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
            >
          {getFieldDecorator('password', {
                rules: [{
                    required: true,
                    message: 'Please input your Password!'
                }],
            })(
                <Input prefix={<Icon type="lock" style={{
                    fontSize: 13
                }} />} type="password" placeholder="Password" />
            )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
            >
            注册
          </Button>
        </FormItem>
      </Form>
        );
    }
}

const Login = Form.create()(HorizontalLoginForm);

export default Login