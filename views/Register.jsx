import React from 'react'



const Register = React.createClass({
  render() {
    const mystyle = {
     padding: "10px",
     backgroundColor:"black"
    };
    const r={
      padding: "20px",
      backgroundColor:"black"

    };
    const h11={
      padding: "20px",
      fontFamily: "Arial",
      fontSize: 70,
      backgroundColor:"black"
    };
    const j={
      width: 200, 
      height: 40
    };

    return (
      <body style={{ backgroundColor:'honeydew'
      }}>
      <section className="column is-offset-6 is-4">
        
        <center>
          <h1 style={h11} >Register</h1>
          <p style={{fontSize:50,fontFamily:"fantasy"}}>Enter your details</p>
          <table>
            <form action="/register" method="post">
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>First Name</td>
                <td style={{boxSizing:60}}><input style={j} type="text" name="fname"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style style={{fontSize:30,padding:"10px"}}>Last Name</td>
                <td style={{boxSizing:60}}  ><input style={j} type="text" name="lname"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Date of birth:</td>
                <td style={{boxSizing:60}}> <input style={j} type="date" name="dob"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Hospital Name</td>
                <td style={{boxSizing:60}}><input style={j} type="text" name="hname"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Username</td>
                <td style={{boxSizing:60}}><input style={j} type="text" name="username"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Password</td>
                <td style={{boxSizing:60}}><input style={j} type="password" name="pwd"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Confirm Password</td>
                <td style={{boxSizing:60}}><input style={j} type="password" name="cpwd"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td style={{fontSize:30,padding:"10px"}}>Security Question(Name of the town you were born in)</td>
                <td style={{boxSizing:60}}><input style={j} type="text" name="security"/></td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td align="center" colspan="2"><input  style={r} type="submit"value="Register" name="regOrLogin" class="class1"/></td>
                <td></td>
              </tr>
              </tbody>
            </form>
          </table>
          <td align="center" colspan="2"><a href='/' ><button style={mystyle}>Go to login page</button></a></td>
        </center>
      </section>
      </body>
    )
  },
});

export default Register
