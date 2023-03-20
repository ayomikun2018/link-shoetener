import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Result({inputValue}) {

    const [display, setDisplay ]= useState ('')
    const [copied, setCopied]= useState(false)
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(false)
  


    const fetchData= async()=>{
        try{
            setLoading(true);
           
            const res=  await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`
            );
            setDisplay(res.data.result.full_short_link)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false);
            
        }

    }
    useEffect(()=>{
        if(inputValue.length){
            fetchData()
        }
    
    },[inputValue])
    const handleCopy= ()=>{
        setCopied(true)
    }
    useEffect(() => {
        const timer=setTimeout (()=>{
            setCopied(false)
        },1000)
        return () =>clearTimeout(timer)
    }, [copied])
    // console.log(display)
    if(loading){
        return <p className='err'>Loading...</p>
    }
    if(error){
        return<p className='err'>Oops! Something went wrong</p>
    }

    return (
     
        <>
           {display &&
            <div className='result'>
            <p>{display}</p>
            <CopyToClipboard
            text= {display}
            onCopy= {handleCopy}
            >
            <button className= {copied ? "copied": ''} >Copy </button>
            </CopyToClipboard>
            
        </div>} 
        </>
        
    )
}
