import {useState,useEffect} from 'react'

const QRCode = ({recipe}) => {
    const [code, setCode] = useState('') 
    const [link, setLink] = useState('')
    useEffect(() => {
        const fetchQR = async() => {
            try{
                console.log(recipe)
                const recipeData = await JSON.stringify(recipe)
                // const hashLink = spaceToUnderscore(recipeData)
                // http://reciprint.netlify.app
                const qrlink = `http://reciprint.netlify.app/addRecipe/${recipeData}`
                const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${qrlink}&size=400x400`)
                console.log(res)
                setCode(res.url)
                setLink(qrlink)
            }
            catch(err){
                console.log(err)
            } 
        } 
        fetchQR()
    },[recipe])
    // const spaceToUnderscore = (str) =>{
    //     return str.replaceAll(' ', '_')
    // }
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