import * as React from 'react'
import { Card } from './Card'
import { Button } from './Button'
import { useRouter } from 'next/router';

type LessonCardProps = {
    title: string;
    subtitle: string;
    url: string;
};

export const LessonCard: React.FC<LessonCardProps> = ({ title, subtitle, url }) => {
    const router = useRouter()
    const Actions = () => (
        <>
            <Button onClick={() => router.push(url)}>Read more</Button>
        </>
    )

    return (
        <Card 
            title={title}
            subtitle={subtitle}
            actions={<Actions />}
        >

        </Card>
    )
}