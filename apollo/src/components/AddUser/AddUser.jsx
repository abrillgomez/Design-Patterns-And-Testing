import { useFormik } from "formik";
import {gql, useMutation} from "@apollo/client"

export const AddUser = () => {
  const CREATE_USER = gql`
  mutation createUser($name: String!, $age: Int!, $married: Boolean!) {
    createUser(name: $name, age: $age, married: $married) {
      name 
      age 
      married 
    }
  }
  `

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      married: false,
    },
    onSubmit: (values) => {
      createUser({
        variables: {
          name: values.name,
          age: +values.age, // Lo convertimos en entero o sino con un parseInt
          married: values.married
        }
      })
    },
  });

  return (
    <>
      <h1>Panel Crear Usuario</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="age">Edad</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <label htmlFor="married">¿Casado?</label>
        <input
          type="checkbox"
          name="married"
          id="married"
          onChange={formik.handleChange}
          value={formik.values.married}
        />
        <input type="submit" value="Crear usuario" />
      </form>
    </>
  );
};
