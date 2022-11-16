import {useState,useEffect} from 'react'

const QRCode = ({recipe}) => {
    const [code, setCode] = useState('') 
    const [link, setLink] = useState('')
    useEffect(() => {
        const fetchQR = async() => {
            try{
                console.log(recipe)
                const recipeData = await JSON.stringify(recipe)
                const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/addRecipe/${recipeData}&size=200x200`)
                console.log(res)
                setCode(res.url)
                let qrlink = await 'http://localhost:3000/addRecipe/' + encodeURIComponent(recipeData)
                setLink(qrlink)
            }
            catch(err){
                console.log(err)
            } 
        }
        
        fetchQR()
    },[recipe])
    // async function getLink(qrCode){
    //     let recData = qrCode.slice(qrCode.indexOf('data=') + 5)
    //     let link = await encodeURIComponent(recData)
    //     return link
    // }
    return (
        <div>
            <a href={link}>
                <img src={code}></img>
            </a>
        </div>
    )
}


export default QRCode