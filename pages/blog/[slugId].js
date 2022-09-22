import { useRouter } from 'next/router'
function SlugDetails(){
    const router = useRouter()
    const  slugId = router.query.slugId
    return (
    <>
   <h1> Details about blog  { slugId }</h1>
    </>
    )
}
export default SlugDetails