import Pagina from "@/components/Pagina"
import Item from "@/components/Item"
import { Card, Col, Container, Row, Table } from "react-bootstrap"
import apiDeputados from "../api/connectApi"
import Link from "next/link"

const index = ({ Deputado, GastosDeputado, profissoesDeputado, name }) => {
    return (
        <>
            <Container>

                <div className="d-flex">
                    <div className="mt-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" title={name} src={Deputado["ultimoStatus"].urlFoto} />
                            <Card.Body>
                                <Card.Title>{Deputado.nomeCivil}</Card.Title>
                                <p><strong>Partido:</strong> {Deputado["ultimoStatus"].siglaPartido}</p>
                                <p><strong>Uf Partido:</strong> {Deputado["ultimoStatus"].siglaUf}</p>
                            </Card.Body>
                        </Card>


                        <Link class="btn btn-danger mt-2" href="/">Voltar</Link>
                    </div>


                    <div className="flex-column mt-3 px-5">
                        <h2>Despesas</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {GastosDeputado.map(item => (

                                    <tr>
                                        <td>{item.dataDocumento}</td>
                                        <td>{item.tipoDespesa}</td>
                                        <td>{item.valorDocumento}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>


                    <div className="flex-column mt-3 px-2">
                        <h2>Profissões 2</h2>
                        <ul>
                            {profissoesDeputado.map(item => (
                                <li>{item.titulo}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default index


export async function getServerSideProps(context) {
    const id = context.params.id
    const name = context.query.name /*TESTES*/

    const resultadoDeputado = await apiDeputados.get(`/deputados/${id}`)
    const Deputado = resultadoDeputado.data.dados


    const resultadoGastosDeputado = await apiDeputados.get(`/deputados/${id}/despesas`)
    const GastosDeputado = resultadoGastosDeputado.data.dados


    const resultadoprofissoesDeputado = await apiDeputados.get(`/deputados/${id}/profissoes`)
    const profissoesDeputado = resultadoprofissoesDeputado.data.dados

    return {
        props: { Deputado, GastosDeputado, profissoesDeputado, name },
    }
}