function Greetings(props) {
function handleButtonClick(){alert('asd')}

return(
    <>
    <h3>ASD, {props.hevonen}</h3>
    <button onClick={handleButtonClick}></button>
    </>
)
}
export default Greetings