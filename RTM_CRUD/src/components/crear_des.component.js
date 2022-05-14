
import React, {Component} from 'react'

export default class CrearDes extends Component{


    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
          <div style={{marginTop: 10}} >
              <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Documento Desarrollador:</label>
                        <input type="text"
                               className="form-control"
                               
                        />                        
                    </div>
                    <div className='form-group'>
                        <label>Nombre Desarrollador:</label>
                        <input type="text"
                               className="form-control"
                               
                        />                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="Submit" value="Guardar" className="btn btn-primary" />
                    </div>
              </form>
          </div>
        )
    }
}
