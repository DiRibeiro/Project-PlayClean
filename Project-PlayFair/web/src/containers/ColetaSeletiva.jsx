import React from 'react'

export default props => (
    <div className="row">
    <div className="col-md-6">
        <div className="form-group"> 
            <input type="file" name="images" accept="image/png, image/jpeg"  multiple /> 
            {/* <img src="./img/lixos/seletiva.jpg"></img> */}
        </div>
    </div>
</div>
)