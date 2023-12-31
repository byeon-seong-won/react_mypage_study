import { useState } from 'react'
import { setbgActions, settabidxActions } from '../store/store.js'
import { useSelector, useDispatch} from 'react-redux'




// 왼쪽메뉴
function Menu({menu}) {

  let bg = useSelector((state) => {return state.bg})
  let dispatch = useDispatch()
  const [curidx, setcurIdx] = useState(0)
 
  
    return (
        <div className={"menu " + ( bg == 'dark'? 'light' : 'dark') }>
          <div>
            <img src={process.env.PUBLIC_URL + 'profile.jpg'} />
            <p>Byeon seong won</p>
            <ul>
                {
                  menu.map(function(a,i) {
                    return(
                      <li onClick={()=> {
                        dispatch(settabidxActions.setTabidx(i)); setcurIdx(i)
                      } } 
                        className={ curidx == i? 'on' : 'none'}>
                        <span class="xi-emoticon"></span>
                        <span> {menu[i]} </span>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
          <div className='button'>
            <button onClick={()=> {dispatch(setbgActions.setBg('light'));}} ><span>Light mode</span></button>
            <button onClick={()=> {dispatch(setbgActions.setBg('dark'));}} ><span>Dark mode</span></button>
          </div>
        </div>
    )
  }



  export default Menu