import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <div
            class="table-responsive"
        >
            <table
                class="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td scope="row">1</td>
                        <td>Carlos</td>
                        <td>carlos@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
         );
    }
}
 
export default Listar;