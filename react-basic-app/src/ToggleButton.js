function ToggleButton() {
    function handleClick(e) {
        e.preventDefault()
        alert('link clicked')
    }
    return (
        <div>
            <button onClick={() => alert('button clicked')}>Button</button>
            <a href="#page" onClick={handleClick}>Page</a>
        </div>
    )
}

export default ToggleButton