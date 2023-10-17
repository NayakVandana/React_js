function Student(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Adrress: {props.other.address}</h1>
        </div>
    )
}

export default Student