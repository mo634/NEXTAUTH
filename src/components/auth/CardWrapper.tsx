import React, { Children } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Header from './Header'
import Link from 'next/link'

interface cardWrapperProps {
    children: React.ReactNode,
    headerLabel: String,
    backButtonLabel: String,
    backButtonHref: String,
    showSocial?: Boolean
}
const CardWrapper = ({ children,headerLabel,backButtonLabel,backButtonHref }: cardWrapperProps) => {
    return (
        <Card className=' w-[400px] shadow-md'>
            
            <CardHeader>
                <Header label = {headerLabel}/>
            </CardHeader>

            <CardContent>
                {children}

                <Link href={backButtonHref}>{backButtonLabel}</Link>
            </CardContent>
        
        </Card>
    )
}

export default CardWrapper