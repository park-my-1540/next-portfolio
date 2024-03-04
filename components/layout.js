/**
 * 모든 layout을 집어넣는.
 * 레이아웃 안에다가 헤더와 푸터를 공통으로 넣을것.
 */
import Footer from './footer'
import Header from './header'
import Head from "next/head";
import React, { useEffect,useState } from 'react'
export default function Layout({children}){
    const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)

	}, [])
    return(
        <>
        <Head>
        </Head>
        {
            mounted && 
                (
                <>
                <div className='bg-primary'>
                    <Header/>
                        {children}
                    <Footer/>
                </div>
                </>
                )
            
        }
        </>
    )
}