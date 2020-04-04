import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'



class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            user : {},
            posts:[],
            logout:false
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user = response.data
            console.log(user)
            this.setState({user})
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const posts = response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleClick=()=>{
     this.setState({logout:true,
     })  
          
    }

   

    render(){
        return(
            <div>
                <h1>UserName</h1>
                <h5>Name-{this.state.user.name}</h5>
                <h5>Email-{this.state.user.email}</h5>
                <h5>Phone-{this.state.user.phone}</h5>
                <h5>Company</h5>
                <ul>
                    {
                        this.state.posts.map(post=>{
                            return(
                                <li key={post.id} >{post.title} <br/>{post.body}</li>
                            )
                        })
                    }
                </ul>
                {this.state.logout ? <Redirect to={`/`} /> : <button onClick = {this.handleClick}>Logout</button>}
                
            </div>
        )
    }
}

export default Dashboard