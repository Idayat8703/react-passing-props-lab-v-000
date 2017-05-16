import React from 'react';
import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.fetchFilters = this.fetchFilters.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }

  componentWillMount(){
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFilters(){
    fetch('/api/fruit_types')
    .then(res => res.json())
    .then(fruit_filters => this.setState({filters: fruit_filters}))
  }

  fetchFruit(){
    fetch('/api/fruit')
    .then(res => res.json())
    .then(fruits => this.setState({fruit: fruits}))
  }

  updateFilter(e){
    console.log('update filter to: ', e.target.value)
    this.setState({currentFilter: e.target.value})
  }

  render(){
    return(
      <FruitBasket
        fruit={this.state.fruit}
        filter={this.state.filter}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter}
        />
    )
  }
}
