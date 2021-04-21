import { useContext, useEffect } from "react"
import { Spinner, Table } from "react-bootstrap"
import { FoodContext } from "../contexts/FoodContext"
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";

const Food = () => {
    const { loading, food, getFood } = useContext(FoodContext)

    useEffect(() => {
        getFood();
        // eslint-disable-next-line
    }, []);


    return (
        <section>
            {loading && <Spinner animation="border" />}

            {food.length > 0 ? (
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>DAY</th>
                            <th>TYPE</th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {food.map((f) => (
                            <tr key={f._id}>
                                <td>{f.day} </td>
                                <td>{f.type}</td>
                                <td>{f.name}</td>
                                <td>{f.quantity}</td>
                                <td><FiEdit /> <FiDelete /> <FiEye /></td>
                            </tr>)
                        )}
                    </tbody>
                </Table>

            ) : (
                    !loading && <h1>NO RECORDS</h1>
                )}

        </section>
    );
};
export default Food;