type blogPost = {
    title: string,
    content: string,
    author: string,
    published: boolean,
    publishedDate?: string
}
const myPost : blogPost ={
    title: "learn typescript",
    content: "typescript is a superset of javascript that adds static typing",
    author: 'sharafat',
    published: true,
    publishedDate: '14-02-2026'
}

function printPost (post: blogPost) : void{
    console.log(`title ${post.title}`)
    console.log(`content ${post.content}`)
    console.log(`author ${post.author}`)
    console.log(`published ${post.published}`)
    console.log(`publishedDate ${post.publishedDate}`)
}

printPost(myPost);
console.log(printPost(myPost));




