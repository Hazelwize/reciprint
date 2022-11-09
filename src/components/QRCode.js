import {useState,useEffect} from 'react'

const QRCode = ({recipe}) => {
    const [code, setCode] = useState('') 
    useEffect(() => {
        const fetchQR = async() => {
            try{
                const recipeData = await JSON.stringify(recipe)
                const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${recipeData}&size=200x200`)
                console.log(res)
                setCode(res.url)
            }
            catch(err){
                console.log(err)
            } 
        }
        
        fetchQR()
    },[recipe])  
    return (
        <div>
            <img src={code}></img>
        </div>
    )
}


export default QRCode