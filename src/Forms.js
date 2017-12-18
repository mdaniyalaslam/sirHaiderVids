import React, {Component} from 'react';

class Forms extends Component{
    constructor(props){
        super(props)
        this.state ={
            username: '',
            allUsers : [],
            radioGroup : {
                MEANStack : false,
                MERNStack : true,
                LAMPStack : false
            },

            checkboxGroup : {
                mongodb : false,
                express : true,
                react : false,
                node : false
            }

        }
        this.formHandler = this.formHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.radioHandler = this.radioHandler.bind(this)
        this.checkboxHandler = this.checkboxHandler.bind(this)
    }

    formHandler(ev){
        this.setState({
            username : ev.target.value,
        })
    }
    clickHandler(ev){
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username)
        this.setState({
            allUsers : currentUser,
            username : '',
            
        })
        console.log(this.state.allUsers)
        
    }
    radioHandler(ev){
        console.log(ev.target.value)
        let radioGroup = this.state.radioGroup
        for (var key in radioGroup){
            radioGroup[key] = false
        }

        radioGroup[ev.target.value ] = ev.target.checked;

        this.setState({
            radioGroup : radioGroup
        })

    }

    checkboxHandler(ev){
        // console.log(ev.target.value)
        let checkbox = this.state.checkboxGroup

        checkbox[ev.target.value ] = ev.target.checked;
        this.setState({
            checkboxGroup : checkbox
        })

    }

    render(){
        return(
            <div>
                <h1>Hello Forms</h1>
                <input type='text' name='username' value={this.state.username} onChange={this.formHandler} />
                <br/>

                Developers Category:
                <br/>
                <label>
                    MEAN Stack: <input type='radio' name='devategory' value='MEANStack' checked = {this.state.radioGroup['MEANStack']} onChange ={this.radioHandler}/>
                </label>
                <br/>

                <label>
                    MERN Stack: <input type='radio' name='devategory' value='MERNStack' checked = {this.state.radioGroup['MERNStack']} onChange ={this.radioHandler}/>
                </label>
                <br/>

                <label>
                    LAMP Stack: <input type='radio' name='devategory' value='LAMPStack' checked = {this.state.radioGroup['LAMPStack']} onChange ={this.radioHandler}/>
                </label>
                <br/>



                Developers Category:
                <br/>
                <label>
                   MongoDB: <input type='checkbox' name='tech' value='mongodb' checked = {this.state.checkboxGroup['mongodb']} onChange ={this.checkboxHandler}/>
                </label>
                <br/>

                <label>
                    Express: <input type='checkbox' name='tech' value='express' checked = {this.state.checkboxGroup['express']} onChange ={this.checkboxHandler}/>
                </label>
                <br/>

                <label>
                    Rreact: <input type='checkbox' name='tech' value='react' checked = {this.state.checkboxGroup['react']} onChange ={this.checkboxHandler}/>
                </label>
                <br/>

                <label>
                    Node: <input type='checkbox' name='tech' value='node' checked = {this.state.checkboxGroup['node']} onChange ={this.checkboxHandler }/>
                </label>
                <br/>
      
                <button onClick = {this.clickHandler}>Add User</button>
            </div>
        )
    }

}

export default Forms;