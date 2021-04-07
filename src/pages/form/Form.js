const Form = (props) => {
    return ( 
        <form id="contactMe">
            <h3>Send Me a Message</h3><br/>
            <div id="contactWrapper">
                <div className="inputItem">
                    <label htmlFor="firstName">First Name: </label>
                        <input type="text" placeholder="E.g. John" id="firstName" name="firstName"/>
                </div>
                <div className="inputItem">
                    <label htmlFor="lastName">Last Name: </label>
                        <input type="text" placeholder="E.g. Doe" id="lastName" name="lastName"/>
                </div>
                <div className="inputItem">
                    <label htmlFor="email">Email: </label>
                        <input type="text" placeholder="E.g. john.doe@email.com" id="email" name="email"/>
                </div>
                <div className="inputItem">
                    <label htmlFor="contactMessage">Message: </label>
                        <textarea placeholder="E.g. Hello World" id="contactMessage" name="contactMessage"></textarea>
                </div>
            </div>
            <div className="buttonPair">
                <button className="clear">Clear</button>
                <button>Submit</button>
            </div>
        </form>
     );
}
 
export default Form;