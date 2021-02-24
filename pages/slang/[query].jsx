import Layout from "components/Layout"
import { useRouter } from "next/router"

const Slang = () => {
  const router = useRouter()
  const { query } = router.query

  return <Layout title="Släng rätt - Slang">Du vill veta hur man slänger {query}</Layout>
}

export default Slang
