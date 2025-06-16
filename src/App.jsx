import {useState, UseState} from 'react'


const Card = ({title, actors, ratings, isCool}) => {
  return(
      <div>
          <h2 className="card">{title}, {ratings}</h2>
      </div>
  )
}
//States are like brain to a react.
const App = () => {
    const [] = useState()
    return(
        <div className="card-container">
            <Card title="Star Wars" ratings={5} isCool={true} />
            <Card title="Avatar"/>
            <Card title="The Lion King"/>
        </div>

    )
}
export default App
