```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const myVariable = router.query.myVariable;

  return (
    <div>
      <h1>About Page</h1>
      {myVariable && <p>My variable: {myVariable}</p>}
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href={{ pathname: '/about', query: { myVariable: process.env.NEXT_PUBLIC_MY_VARIABLE } }}>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```