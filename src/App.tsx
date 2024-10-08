import Card, { CardBody } from './components/Card';
import List from './components/List';

function App() {
  const list = ["Goku", "Tanjiro", "Eren"]

  return (
    <>
      <Card >
        <CardBody title={"titulooo"} text={"este es el texto que ddebe aparecer en el centro de la tarjeta importada de bootstrap"} />
        <List data={list}/>
      </Card>
    </>
  )
}

export default App;
