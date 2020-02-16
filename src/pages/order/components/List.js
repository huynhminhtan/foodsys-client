import React, { PureComponent } from 'react'
import { Table, Avatar, Popconfirm, Button } from 'antd'
import { withI18n } from '@lingui/react'
import { Ellipsis } from 'ant-design-pro'
import styles from './List.less'
import moment from 'moment'
import Link from 'umi/link'
import { increaseStatus, OrderStatusEnum } from '../../../enums/OrderStatusEnum'

@withI18n()
class List extends PureComponent {
  render() {
    const { i18n, updateStatus, ...tableProps } = this.props
    const handleUpdate = (id, status) => {
      updateStatus(id, status)
    }

    const columns = [
      {
        title: i18n.t`OrderId`,
        dataIndex: 'id',
        render: (text, record) => (
          <Link to={`order/${record.id}`}>
            <Avatar
              className={styles.antAvatar}
              shape="square"
              src={
                'https://dummyimage.com/70x70/f2798e/757575.png&text=' +
                String(text)
              }
            />
          </Link>
        ),
      },
      {
        title: i18n.t`Receiver Name`,
        dataIndex: 'receiverName',
        render: (text, record) => <Link to={`order/${record.id}`}>{text}</Link>,
      },
      {
        title: i18n.t`Receiver Phone`,
        dataIndex: 'receiverPhone',
      },
      {
        title: i18n.t`Total Price`,
        dataIndex: 'totalPrice',
      },
      {
        title: i18n.t`Delivery Located`,
        dataIndex: 'deliveryLocated',
        render: text => (
          <Ellipsis tooltip length={20}>
            {text}
          </Ellipsis>
        ),
      },
      {
        title: i18n.t`Order Time`,
        dataIndex: 'orderTime',
        render: text => (
          <span>{moment(parseInt(text)).format('DD/MM/YYYY HH:mm')}</span>
        ),
      },
      {
        title: i18n.t`Delivery Time`,
        dataIndex: 'deliveryTime',
        render: text => (
          <span>{moment(parseInt(text)).format('DD/MM/YYYY HH:mm')}</span>
        ),
      },
      {
        title: i18n.t`Status`,
        dataIndex: 'status',
      },
      {
        title: 'Operation',
        dataIndex: 'status',
        render: (text, record) =>
          OrderStatusEnum[text] < 5 ? (
            <Popconfirm
              title="Sure to update?"
              onConfirm={() => handleUpdate(record.id, increaseStatus(text))}
            >
              <Button size="small">{increaseStatus(text)}</Button>
            </Popconfirm>
          ) : (
            <span>_</span>
          ),
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        bordered
        // scroll={{x: 1200}}
        className={styles.table}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

export default List
