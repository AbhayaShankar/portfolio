---
title: "My Blog for Next Js"
date: "2023-05-22"
slug: "demo"
image: "2.jfif"
excerpt: "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG."
isFeatured: false
isPublished: true

---

# 🖊️This is a Blog Post for Node.js

Welcome to Abhaya's Blog where you get access to all the latest tech Abhaya is learning and sharing. This is the starter course for people learning and starting out to Node.js

NextJS is a&nbsp;**framework for ReactJS**.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

## ❓Why would we then need NextJS?

Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way more than just take care of that).

In this article, we'll dive into the core concepts and features NextJS has to offer:

- File-based Routing
- Built-in Page Pre-rendering
- Rich Data Fetching Capabilities
- Image Optimization
- Much More

## 📁 File-based Routing

![Create routes via your file + folder structure](/blogs/demo/FBR.png)

![Home Page](/home.jpg)

![Home Page](/home2.jpg)

```js
export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };

  // why is this string not wrapping?

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

}   
```


```python
# Solve the quadratic equation ax**2 + bx + c = 0

# import complex math module
import cmath

a = 1
b = 5
c = 6

# calculate the discriminant
d = (b**2) - (4*a*c)

# find two solutions
sol1 = (-b-cmath.sqrt(d))/(2*a)
sol2 = (-b+cmath.sqrt(d))/(2*a)

print('The solution are {0} and {1}'.format(sol1,sol2))
```

P.s. :- This is just the trial demo version while designing this app.
 