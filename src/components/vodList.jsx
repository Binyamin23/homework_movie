import React from 'react'
import VodItem from './vodItem'

const VodList = (props) => {

  return (
    <div className="container-fluid vod_list pt-3" >
      <div className="container ">
        <div className="row text-center">
          {props.vod_ar.map(item => {
            return (
              < VodItem key={item.imdbID} item={item} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default VodList