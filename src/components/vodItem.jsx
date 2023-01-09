
import { Link } from 'react-router-dom'

const VodItem = (props) => {

    let item = props.item
    return (
        <div className="col-6 col-md-4 col-lg-3 vod_item px-3"> 
            <div className='overflow-hidden vod_item2 h-100'>
            <Link to={"/info/"+item.imdbID}> <img src={item.Poster} className=' vod_item3' alt="" /></Link >
                <div className='text-white mt-0'>{item.Title} </div>
                <div className='text-white '>{item.Year}</div>
              
            </div>
        </div>
    )
}

export default VodItem