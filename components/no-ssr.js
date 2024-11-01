import dynamic from 'next/dynamic'
import React from 'react'

const NoSsr = props => <>{props.children}</>

export default dynamic(() => Promise.resolver(NoSsr), {
  ssr: false
})