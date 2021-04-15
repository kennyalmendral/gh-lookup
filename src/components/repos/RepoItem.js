import React from 'react'
import PropTypes from 'prop-types'
import { formatDistance, subDays } from 'date-fns'

const RepoItem = ({ repo }) => {
  const { name, description, html_url, license, updated_at } = repo;

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div style={{ flex: '0 0 50%' }} className="pr-4">
          <h5><a href={html_url} target="_blank" rel="noreferrer">{name}</a></h5>

          {description && <p className="text-muted mb-0">{description}</p>}
        </div>

        <div className="d-flex justify-content-end" style={{ flex: '0 0 50%' }}>
          {license ? <p className="text-muted m-0 text-right" style={{ fontWeight: '400' }}>{license.name}</p> : <p className="text-muted m-0 text-right" style={{ fontWeight: '400' }}>No license specified</p>}

          <p className="text-muted pl-2 ml-2 mb-0 text-right" style={{ borderLeft: '1px solid rgb(0 0 0 / 13%)' }}>Last updated  {formatDistance(subDays(new Date(updated_at), 3), new Date(), { addSuffix: true })}</p>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
