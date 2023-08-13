import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {

        setTimeout(() => {
            // will return to the previos page
        //router.go(-1)

        router.push('/')

        }, 3000)

    },[])
    return ( 
        <div class="not-found">
            <h1> Opppsss ...</h1>
            <h2>That page cannot be found</h2>
          <p> <Link href="/"> Go back to the home page</Link></p>
        </div>
     );
}
 
export default NotFound;
