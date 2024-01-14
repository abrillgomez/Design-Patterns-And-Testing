import { useUserContext } from "../../context/UserContext";

const UserList = () => {
  const { users } = useUserContext();

  return (
    <>
      {users?.map((user) => (
        <>
          <p>Nombre: {user.name}</p>
          <p>Años: {user.age}</p>
        </>
      ))}
    </>
  );
};

export default UserList;
