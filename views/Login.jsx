import React from 'react'

const Login = React.createClass({
  getInitialState() {
    return { error: false }
  },

  render() {
    const h11={
      padding: "20px",
      fontFamily: "Arial",
      fontSize: 70,
      backgroundColor:"black"
    }; 
    const mystyle = {
      padding: "10px",
      backgroundColor:"black"
     };
    const j={
      width: 200, 
      height: 40
    };
    const r={
      padding: "20px",
      backgroundColor:"black"

    };

    return (
      <body style={{ backgroundColor: 'khaki'
      }}>
      <section className="column is-offset-6 is-4">
        <center>
          <h1  style={h11}>Login </h1>
          <p style={{fontSize:50,fontFamily:"fantasy"}}>Enter your username and password</p>
          <table>
            <form action="/login" method="post">
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Username</td>
                <td><input style={j} type="text" name="username"/></td>
              </tr>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Password</td>
                <td><input style={j} type="password" name="pwd"/></td>
              </tr>
              <tr>
                <td colspan="2" align="center"><input type="submit" style={r} value="Login" name="regOrLogin" class="class1"/></td>
              </tr>
            </form>
          </table>
          <td align="center" colspan="2"><a href='/register' ><button style={mystyle}>Go to registration page</button></a></td>
        </center>
      </section>
      </body>
    )
  },
})

export default Login
