import { useParams } from "react-router"

const Index = () => {
  const { id } = useParams()

  return (
    <div>
      <h3>Detail Page</h3>
      <div>Detail id is {id}</div>
    </div>
  )
}

export default Index
