// Blog Post Object 
// title
// body
// author
// views
// comments
//  (author, body)
// isLive
/*
let post = {
    title: 'A',
    body: 'xcvxcvcxcxv',
    author: 'sdcas',
    views: 20,
    comments: [
       {author: 'f', body: 'r'},
       {author: 'd', body: 'g'}
   ],
    isLive: true
   }
   
   //console.log(post);
  */ 

   // Constructor function
   function Post(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
   }

let post = new Post('r', 'c', 'f') 
post.comments = ['fire', 'burn'];
post.views = 20;
post.isLive = true;

console.log(post);
   //console.log(Post('r', 'c', 'f')); // incorrect call or declaration to constructor function 
   // always use a nEW keyword.
