
import Button from './Button'

const App= () => {
    return <div>
        <h1> Raniban Party Palace </h1>
        <h3> Raniban is the One of the prestigious place in the Heart of Raniban Town Planning</h3>
        <div className='center'>
            <Button name="Google" link="https://google.com"/> 
            <Button name="Youtube" link="https://youtube.com"/> 
            <Button name="facebook" link="https://facebook.com"/>
            <br></br>
            <Button name="GitHub"/> <Button name="Technology Channel"/> <Button name="IPO Result"/>
        </div>
    </div> 
}

//this will export the App to Another callable components
export default App;