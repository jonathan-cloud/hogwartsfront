import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {Container} from 'react-bootstrap'
const DataChart = () => {
  return (
    <Container>
    <PieChart
    data={[
    { title: 'color', value: 20, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>
</Container>
  )
}

export default DataChart