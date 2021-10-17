import React from "react";

const Reset = React.createClass({
    render() {
        return (
            <body>
                 <table>
                    <form action="/reset" method="post">
                        <tbody>
                            <tr>
                                <td>Enter Username</td>
                                <td><input type="text" name="username"/></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Enter Security Answer</td>
                                <td><input type = "text" name = "answer"/></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>Enter New Password</td>
                                <td><input type = "text" name = "pwd"/></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>Confirm password</td>
                                <td><input type = "text" name = "cpwd"/></td>
                            </tr>
                        </tbody>
                        <tr>
                         <td colspan="2" align="center"><input type="submit" class="class1"/></td>
                      </tr>
                    </form>
                </table>
            </body>
        )
      },
});

export default Reset;