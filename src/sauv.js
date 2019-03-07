
<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h3>Il est {new Date().toLocaleTimeString()}.</h3>
<form onSubmit={this.handleSubmit}>
    <input type="submit" value="Lancer l'interview"  onSubmit={this.handleSubmit}   />
</form>



</header>


<Button title='Logout' onClick={this.props.toggleLogin} />