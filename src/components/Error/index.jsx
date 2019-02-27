import React from 'react'

import { Alert } from 'reactstrap'

export default (props) => (
  props.error ?
    <Alert color='danger'>
      { props.error }
    </Alert>
    : null
)
