import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import user from '../../redux/actions'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.test(values)
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
const _Login = Form.create()(HorizontalLoginForm);
function mapStateToProps(argument) {
    return {

    }
}
function mapDispatchToProps(dispath) {
    return {
        test: bindActionCreators(user, dispath)
    }
}
const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Login)
export default Login