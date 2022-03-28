import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login, password } from "../../constants";
import { IForm } from "../../types";
import "../../App.css";

type SignInPageState = {
    exist: boolean,
    user: string,
    loading: boolean,
};

export const SignInPage: React.FC = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IForm>();

    const [state, setState] = useState<SignInPageState>({
        exist: true,
        user: '',
        loading: false,
    });

    const navigate = useNavigate();

    const requestToServer = useCallback((ms: number) => new Promise((resolve) => {
        setTimeout(resolve, ms);
        setState({
            ...state,
            loading: true,
        });
    }), [state]);

    const onSubmit = useCallback(async (data: IForm) => {
        await requestToServer(2000);

        if (data.login === login && data.password === password) {
            localStorage.setItem('user', JSON.stringify({
                login: data.login,
                password: data.password,
                savePassword: data.savePassword,
            }));
            navigate('/profile');
        } else setState({
            user: data.login,
            exist: false,
            loading: false,
        });

    },[navigate, requestToServer]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!state.exist ?
                <div className="serverError">
                    <div className="warning">!</div>
                    <span>Пользователя {state.user} не существует</span>
                </div>
                : null
            }

            <>
                <label>Логин</label>
                <input
                    defaultValue={login}
                    type="text"
                    {...register("login", {
                        required: true,
                    })}
                    className={errors.login ? 'inputError' : ''}
                />
                {errors?.login?.type === "required" && <p>Обязательное поле</p>}
            </>

            <>
                <label>Пароль</label>
                <input
                    defaultValue={password}
                    type="text"
                    {...register("password", {
                        required: true,
                    })}
                    className={errors.password ? 'inputError' : ''}
                />
                {errors?.password?.type === "required" && <p>Обязательное поле</p>}
            </>

            <>
                <input
                    type="checkbox"
                    id="checkbox-o"
                    {...register("savePassword")}
                />
                <label htmlFor="checkbox-o"></label>
                <label className="title-checkbox" >Запомнить пароль</label>
            </>

            <input
                type="submit"
                value="Войти"
                disabled={state.loading}
                className={state.loading ? 'btnLoading' : ''}
            />
        </form>
    );
};
