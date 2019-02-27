import React from 'react'

import { Alert } from 'reactstrap'

export default (props) => (
  props.message ?
    <Alert color='success'>
      { props.message }
    </Alert>
    : null
)
