import Layout from "components/Layout"
import ErrorPage from "components/ErrorPage"

const NotFound = () => (
  <Layout title="Släng rätt - Sidan hittades inte">
    <ErrorPage image="/page_not_found.svg" title="Det finns inget här">
      Någonting måste gått snett. För här finns det inget. Kontrollera att webadressen är korrekt
      och försök igen.
    </ErrorPage>
  </Layout>
)

export default NotFound
