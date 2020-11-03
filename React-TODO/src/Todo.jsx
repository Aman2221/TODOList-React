import React,{useState} from 'react';
import './index.css'
const Todo = () =>{
    const [item,setItem] = useState();
    const [itemList,setItemList] =useState(([]));
    const UserIp = (event) =>{
        setItem(event.target.value);
    };
    const AddEle = () =>{
        setItemList((oldItems) => {
            return [...oldItems, item]
        });
        setItem("");
    };
    const deleteItem = () =>{
    }
    return(
        <>
            <div id='todo'>
                <h1 id='head'>TODO<span>List</span></h1>
                <input type='text' value={item} onChange={UserIp}/>
                <button onClick={AddEle}><i class="fas fa-plus-circle"></i></button>
                <ol >
                    {itemList.map((itemVal, index) => {
                        return <li>
                        <i class="fas fa-trash" onClick={deleteItem}></i>
                        {itemVal}</li>
                    })
                    }
                </ol>
            </div>
        </>
    )
}

export default Todo;