import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email :'',
            users:[],
            loginStatus: false,
            userid:''
            
        }
    }

    handleEmail=(e)=>{
        const email = e.target.value
        this.setState({email})
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data
            
            this.setState({users
          }
             
          )
    })

    .catch((err)=>{
        console.log(err)
    })
    }
    handleTabOut =()=>{
        
    

 for(let i=0;i<this.state.users.length-1;i++){
    //console.log(this.state.users[i].email)
    if( this.state.users[i].email === this.state.email){
        let userid = this.state.users[i].id
        console.log(this.state.users[i].email ,  this.state.users[i].id)
       return (
        
       this.setState({loginStatus:true,
        userid
    })
       
       )
    }
    
    
}
alert('invalid mail id')
}

        

       
    

    render(){
       // console.log(this.state.users)
        return(
            <div>
                {this.state.loginStatus && <Redirect to={`/user/${this.state.userid}`} /> }
                <h3>Login {this.state.users.email}</h3>
                <label htmlFor='email'>UserName</label>
                <input type='text' id ='email' value = {this.state.email} onChange = {this.handleEmail} onBlur={this.handleTabOut}/>
                <h6>Enter In Login</h6>
            </div>
        )
    }
    }

export default Login