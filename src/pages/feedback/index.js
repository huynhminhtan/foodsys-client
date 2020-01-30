import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { router } from 'utils'
import { stringify } from 'qs'
import { withI18n } from '@lingui/react'
import { Page } from 'components'
import List from './components/List'
import data from './datasource'

const { TabPane } = Tabs

const EnumPostStatus = {
  ALL: 1,
  ORDERED: 2,
  CONFIRMED: 3,
  DELIVERING: 4,
  COMPLETED: 5,
  CANCELED: 6,
}

@withI18n()
@connect(({ post, loading }) => ({ post, loading }))
class FeedbackPage extends PureComponent {
  handleTabClick = key => {
    const { pathname } = this.props.location

    router.push({
      pathname,
      search: stringify({
        status: key,
      }),
    })
  }

  get listProps() {
    const { post, loading, location } = this.props
    const { list, pagination } = post
    const { query, pathname } = location

    console.log('list== ' + JSON.stringify(data))
    return {
      pagination,
      // dataSource: list,
      dataSource: data,
      loading: loading.effects['post/query'],
      onChange(page) {
        router.push({
          pathname,
          search: stringify({
            ...query,
            page: page.current,
            pageSize: page.pageSize,
          }),
        })
      },
    }
  }

  render() {
    const { location, i18n } = this.props
    const { query } = location

    return (
      <Page inner>
        <List {...this.listProps} />
      </Page>
    )
  }
}

FeedbackPage.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default FeedbackPage
