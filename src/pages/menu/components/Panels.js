import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List, Card, Button } from 'antd'
import styles from '../index.less'
import { data, data2, data3 } from '../datasource'
import { DeleteTwoTone, EditTwoTone, PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'

const { Panel } = Collapse
const { Meta } = Card

const btnStyle = {
  marginLeft: 5,
}

const genExtra = () => (
  <div>
    <Button icon={<EditTwoTone />} size="small" />
    <Button style={btnStyle} icon={<DeleteTwoTone />} size="small" />
  </div>
)

class Panels extends PureComponent {
  render() {
    const nullData = {}

    return (
      <Collapse defaultActiveKey={['1']} onChange={this.callback}>
        {/*<Panel header="Điểm tâm sáng" key="1" extra={genExtra()}>*/}
        {/*  <List*/}
        {/*    grid={{ gutter: 16, column: 4 }}*/}
        {/*    dataSource={[...data, nullData]}*/}
        {/*    renderItem={item => {*/}
        {/*      if (item && item.name) {*/}
        {/*        return (*/}
        {/*          <List.Item>*/}
        {/*            <Card*/}
        {/*              hoverable*/}
        {/*              style={{ width: 240 }}*/}
        {/*              cover={<img alt={item.name} src={item.imageUrl} />}*/}
        {/*              actions={[*/}
        {/*                <a key="edit">Edit</a>,*/}
        {/*                <a key="remove">Remove</a>,*/}
        {/*              ]}*/}
        {/*            >*/}
        {/*              <Meta*/}
        {/*                title={item.name}*/}
        {/*                description={item.description}*/}
        {/*              />*/}
        {/*              <br />*/}
        {/*              <p className={styles.cardPtag}>*/}
        {/*                <span>Price: </span>*/}
        {/*                {item.price}đ*/}
        {/*              </p>*/}
        {/*            </Card>*/}
        {/*          </List.Item>*/}
        {/*        )*/}
        {/*      }*/}

        {/*      return (*/}
        {/*        <List.Item>*/}
        {/*          <Button*/}
        {/*            type="dashed"*/}
        {/*            className={styles.btnCard}*/}
        {/*            onClick={this.showModal2}*/}
        {/*          >*/}
        {/*            <PlusOutlined /> Add*/}
        {/*          </Button>*/}
        {/*          /!*<Card*!/*/}
        {/*          /!*  hoverable*!/*/}
        {/*          /!*  style={{width: 240}}*!/*/}
        {/*          /!*  cover={<img alt={item.name} src={item.imageUrl}/>}*!/*/}
        {/*          /!*>*!/*/}
        {/*          /!*  <Meta title={item.name} description={item.description}/>*!/*/}
        {/*          /!*  <br/>*!/*/}
        {/*          /!*  <p className={styles.cardPtag}>*!/*/}
        {/*          /!*    <span>Prixxxxxce: </span>*!/*/}
        {/*          /!*    {item.price}đ*!/*/}
        {/*          /!*  </p>*!/*/}
        {/*          /!*</Card>*!/*/}
        {/*        </List.Item>*/}
        {/*      )*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Panel>*/}
        {/*<Penels/>*/}
        <Panel header="Món nước" key="2" extra={genExtra()}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={[...data2, nullData]}
            renderItem={item => {
              if (item && item.name) {
                return (
                  <List.Item>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt={item.name} src={item.imageUrl} />}
                      actions={[
                        <a key="edit">Edit</a>,
                        <a key="remove">Remove</a>,
                      ]}
                    >
                      <Meta title={item.name} description={item.description} />
                      <br />
                      <p className={styles.cardPtag}>
                        <span>Price: </span>
                        {item.price}đ
                      </p>
                    </Card>
                  </List.Item>
                )
              }

              return (
                <List.Item>
                  <Button
                    type="dashed"
                    className={styles.btnCard}
                    onClick={this.showModal2}
                  >
                    <PlusOutlined /> Add
                  </Button>
                  {/*<Card*/}
                  {/*  hoverable*/}
                  {/*  style={{width: 240}}*/}
                  {/*  cover={<img alt={item.name} src={item.imageUrl}/>}*/}
                  {/*>*/}
                  {/*  <Meta title={item.name} description={item.description}/>*/}
                  {/*  <br/>*/}
                  {/*  <p className={styles.cardPtag}>*/}
                  {/*    <span>Prixxxxxce: </span>*/}
                  {/*    {item.price}đ*/}
                  {/*  </p>*/}
                  {/*</Card>*/}
                </List.Item>
              )
            }}
          />
        </Panel>
        <Panel header="Thức ăn nhanh" key="3" extra={genExtra()}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={[...data3, nullData]}
            renderItem={item => {
              if (item && item.name) {
                return (
                  <List.Item>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt={item.name} src={item.imageUrl} />}
                      actions={[
                        <a key="edit">Edit</a>,
                        <a key="remove">Remove</a>,
                      ]}
                    >
                      <Meta title={item.name} description={item.description} />
                      <br />
                      <p className={styles.cardPtag}>
                        <span>Price: </span>
                        {item.price}đ
                      </p>
                    </Card>
                  </List.Item>
                )
              }

              return (
                <List.Item>
                  <Button
                    type="dashed"
                    className={styles.btnCard}
                    onClick={this.showModal2}
                  >
                    <PlusOutlined /> Add
                  </Button>
                  {/*<Card*/}
                  {/*  hoverable*/}
                  {/*  style={{width: 240}}*/}
                  {/*  cover={<img alt={item.name} src={item.imageUrl}/>}*/}
                  {/*>*/}
                  {/*  <Meta title={item.name} description={item.description}/>*/}
                  {/*  <br/>*/}
                  {/*  <p className={styles.cardPtag}>*/}
                  {/*    <span>Prixxxxxce: </span>*/}
                  {/*    {item.price}đ*/}
                  {/*  </p>*/}
                  {/*</Card>*/}
                </List.Item>
              )
            }}
          />
        </Panel>
      </Collapse>
    )
  }
}

Panels.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default Panels
