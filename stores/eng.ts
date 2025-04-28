import { defineStore }  from 'pinia';

interface club {
    id: number;
    name: string;
    age: string;
    character: string;
    country: string;
    earnings: string;
    img: string;

}
export const useEngStore = defineStore('eng', () => {
    const eng = ref<club[]>([
        {
            id: 1,
            name: 'Arslan Ash',
            age: 'age 29',
            country: '🇵🇰',
            character: 'Nina, Lars',
            earnings: '$377,488',
            img: '/img/arslan.png'

        },
        {
            id: 2,
            name: 'Knee',
            age: 'age 39',
            country: '🇰🇷',
            character: 'Bryan, Feng, Dragunov',
            earnings: '$356,145',
            img: 'img/knee.jpg'

        },
        {
            id: 3,
            name: 'JDCR',
            age: 'age 36',
            country: '🇰🇷',
            character: 'Dragunov, Heihachi',
            earnings: '$126,581',
            img: 'img/jdcr.webp'

        },
        {
            id: 4,
            name: 'Kkokkoma',
            age: 'age 31',
            country: '🇰🇷',
            character: 'Feng',
            earnings: '$48,913',
            img: 'img/Kkokkoma.png'

        },
        {
            id: 5,
            name: 'Joka',
            age: 'age 28',
            country: '🇬🇧',
            character: 'Feng, Heihachi',
            earnings: '$70,792',
            img: 'img/joka.jpg'

        },
    ]
    )


    return { eng }


},{persist: true})