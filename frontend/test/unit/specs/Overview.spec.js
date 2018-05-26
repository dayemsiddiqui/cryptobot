import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'

function getRenderedComponent (Component, propsData) {
  return mount(Component, propsData)
}

function filterChildren (children, name) {
  return children.filter((child) => child.$options.name === name)
}

describe('Overview.vue should', () => {
  it('contain 4 stats cards 3 chart cards and 4 circle charts', () => {
    const vm = getRenderedComponent(Overview)
    let {$children: children} = vm
    const statsCards = filterChildren(children, 'stats-card').length
    const chartCards = filterChildren(children, 'chart-card').length
    const circleChartCards = filterChildren(children, 'circle-chart-card').length
    expect(statsCards).to.equal(4)
    expect(chartCards).to.equal(3)
    expect(circleChartCards).to.equal(4)
  })
})
