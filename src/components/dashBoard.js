import React,{ useState, useEffect }from 'react'
import './style.css'
import { useDispatch } from "react-redux";
import { usersList } from '../actions/dashBoardAction';
import { connect } from 'react-redux'


const Login = (props) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const { lists } = props
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersList())
    }, [])
    
    console.log(lists)
    
    return(
        <div>
          <table className="table users-table">
            <tbody>
               <tr><th>Id</th><th>Name</th><th>Age</th><th>Gender</th><th>Email</th><th>Phone-no</th></tr>
                {lists && lists.user ? lists.user.map((list) => (
                <tr className="user-list"key={list.id}> 
                  <td className="user-data">{list.id}</td>
                  <td className="user-data">{list.name}</td>
                  <td className="user-data">{list.age}</td>
                  <td className="user-data">{list.gender}</td>
                  <td className="user-data">{list.email}</td>
                  <td className="user-data">{list.phoneNo}</td>
                </tr>
                )): null}
            </tbody>
          </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    lists: state.list.list,
  })

export default connect(mapStateToProps)(Login)