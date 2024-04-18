import React, { Children } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Header from './Header'

interface cardWrapperProps {
    children: React.ReactNode,
    headerLabel: String,
    backButtonLabel: String,
    backButtonHref: String,
    showSocial?: Boolean
}
const CardWrapper = ({ children,headerLabel }: cardWrapperProps) => {
    return (
        <Card className=' w-[400px] shadow-md'>
            
            <CardHeader>
                <Header label = {headerLabel}/>
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>
        
        </Card>
    )
}

export default CardWrapper