

interface user{
    id: number,
    name: string,
    email: string
}

interface author extends user{
    bio: string,
    posts: string[]
}

type status = 'active' | 'inactive' | 'banned';

const author1 : author = {
    id: 1,
    name: 'sharafat',
    email: 'sharafat508e@gmail.com',
    bio: 'i am fullstack developer',
    posts: ['post1','post2','post3']
}

