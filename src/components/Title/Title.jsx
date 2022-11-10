
function Title(props) {
  return (
    <h1 style={{textAlign: props.position}}>
        {props.children}
    </h1>
  )
}

export default Title