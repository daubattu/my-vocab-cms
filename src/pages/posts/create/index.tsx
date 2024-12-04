import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import Card from '../../../components/Card'
import { useForm } from 'antd/lib/form/Form'
import { Button, Col, Form, Input, Row, Select } from 'antd'

export default function CreatePost() {
  const [form] = useForm()

  function onFinish(values: any) {
    console.log(values)
  }

  return (
    <div>
      <Card>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="level" label="Level">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="unit" label="Unit">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="index" label="Số thứ tự">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="text" label="Text">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="audio_src" label="Audio">
                <Input type="file" accept="audio/*" />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Thêm mới
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}
