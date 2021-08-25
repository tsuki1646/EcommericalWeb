import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const UserIndex = () =>{   
    const {
        state: { user },
    } = useContext(Context);

    return (
        <UserRoute>
            <h1 className="p-5 mb-4 bg-light rounded-3 text-center square">
                User dashboard
            </h1>
        </UserRoute>
    )
}

export default UserIndex;