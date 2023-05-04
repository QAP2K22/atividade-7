import Pagina from "@/components/Pagina"
import Item from "@/components/Item"
import { Col, Row } from "react-bootstrap"
import apiDeputados from "./api/connectApi"

const index = (props) => {
  return (
    <>
      <Pagina titulo="Deputados">
        <Row md={6}>
          {props.Deputados.map(item => (
            <Col key={item.id} className='mt-3'>
              <Item title={item.nome} foto={(item.urlFoto == null) ? "http://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg" : `${item.urlFoto}`} id={item.id} linkName="detalhes"></Item>
            </Col>
          ))}
        </Row>
      </Pagina>
    </>
  )
}

export default index


export async function getServerSideProps(context) {
  const resultadoDeputados = await apiDeputados.get('/deputados')
  const Deputados = resultadoDeputados.data.dados

  return {
      props: {Deputados},
  }
}