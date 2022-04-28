import { useForm } from "react-hook-form"
import "../css/userForm.css";

const UserForm = ({onCreate}) => {

    const { register, handleSubmit} = useForm()

    const onSubmit = (res) => {
        onCreate(res)
        

    }
    return (
        <ul className="user-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                <label htmlFor="firstName"><i className="fa-duotone fa-user"></i></label>
                    <div className="allName">
                        <input id='firstName' type="text" placeholder="First Name" maxLength={12} {...register('first_name')} />
                        <input id='lastName' type="text" placeholder="Last Name" maxLength={15}{...register('last_name')} />
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="email"></label>
                    <input id="email" type="email" placeholder="email" {...register('email')} />
                </div>
                <div className="input">
                    <label htmlFor="password"></label>
                    <input id='password' type="password" placeholder="Password" {...register('password')} />
                </div>
                <div className="input">
                    <label htmlFor="birthday"></label>
                    <input id ='birthday'type="date"  {...register('birthday')} />
                </div>
                <br />
                <div className="submit-button">
                    <input type="submit" value="Create User" />
                </div>     
            </form>
        </ul>
    )
}

export default UserForm