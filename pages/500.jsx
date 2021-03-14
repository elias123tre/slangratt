import Layout from "components/Layout"
import ErrorPage from "components/ErrorPage"

const NotFound = () => (
  <Layout title="Släng rätt - Sidan är nere">
    <ErrorPage image="/server_down.svg" title="Sidan verkar vara nere">
      Ett kritiskt serverfel har inträffat och det går inte att nå sidan.
    </ErrorPage>
  </Layout>
)

export default NotFound
