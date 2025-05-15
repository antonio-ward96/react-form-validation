import "./FormStyle.css";
import MOdal from './Modal';
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoanForm() {
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setShowModal(true);
        reset();
    };

    function handleDivClick() {
        if (showModal) {
            setShowModal(false);
        }
    }

    return (
        <div onClick={handleDivClick} className="flex" style={{ flexDirection: "column" }}>
            <form onSubmit={handleSubmit(onSubmit)} id="loan-form" className="flex" style={{ flexDirection: "column" }}>
                <h1>Request Loan</h1>
                <hr />

                {/* Name */}
                <label>Name</label>
                <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}

                {/* Phone Number */}
                <label>Phone Number</label>
                <input
                    {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\+?[0-9]{8,12}$/,
                            message: "Phone number must contain only numbers and may start with +",
                        },
                        minLength: {
                            value: 8,
                            message: "Phone number must be at least 8 digits",
                        },
                        maxLength: {
                            value: 12,
                            message: "Phone number must be no more than 12 digits",
                        },
                    })}
                    placeholder="Enter your phone number"
                />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}

                {/* Age */}
                <label>Age</label>
                <input
                    type="number"
                    {...register("age", { required: "Age is required" })}
                    placeholder="Enter your age"
                />
                {errors.age && <span className="error">{errors.age.message}</span>}

                {/* Is Employee */}
                <label style={{ marginTop: "30px" }}>Are you an employee?</label>
                <input
                    type="checkbox"
                    {...register("isEmploye")}
                />

                {/* Salary */}
                <label>Salary:</label>
                <select {...register("salary", { required: "Salary is required" })}>
                    <option value="">--select your salary--</option>
                    <option value="500">$500</option>
                    <option value="500-2000">Between $500 and $2000</option>
                    <option value="2000+">More than $2000</option>
                </select>
                {errors.salary && <span className="error">{errors.salary.message}</span>}

                <button type="submit" id="submit-loan-btn" >
                    Submit
                </button>
            </form>

            {showModal && (
                <div className="overlay"><MOdal /></div>
            )}
        </div>
    );
}
