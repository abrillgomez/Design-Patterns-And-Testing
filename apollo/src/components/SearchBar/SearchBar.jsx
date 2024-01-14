import { useState } from "react"
import { gql, useQuery } from "@apollo/client";
import { useUserContext } from "../../context/UserContext";

export const GET_USERS_BY_NAME = gql `
  query getUsersByName($name: String!) {
    getUsersByName(name: $name){
      name 
      age
    }
  }
`

export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const {updateUserList} = useUserContext()
  const { loading, error, data, refetch } = useQuery(GET_USERS_BY_NAME, {
    variables: {name: search},
    skip: true
  }) 

  const handleSearch = async () => {
    const { data } = await refetch()
    if(data){
      updateUserList(data.getUsersByName)
    }
  }

  return (
    <>
      <h1>Panel de búsqueda</h1>
      <input type="text" name="search" id="search" onChange={(e) => setSearch(e.currentTarget.value)} />
      <button onClick={handleSearch}>Buscar usuario</button>
    </>
  )
}
