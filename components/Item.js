import React from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
const Item = (props) => {
    return (
        <>
            <Card className="shadow mb-2 bg-white rounded" style={{ marginBottom: '12px' }}>
                <Link href={props.id ? {
                    pathname: `/${props.linkName}/${props.id}`,
                    query: { name: props.title }
                } : `/${props.linkName}`}>

                    <Card.Img variant="top" src={props.foto ? props.foto : "https://cdn.discordapp.com/attachments/780615034816036897/1099187480349118626/devqap.png"} title={props.title} />
                </Link>
            </Card>
        </>
    )
}

export default Item