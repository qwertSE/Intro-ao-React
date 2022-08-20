import style from "./Button.module.scss";

const Button = (props:any) => {
        return (
            <button className={style.botao}>
                {props.children}
            </button>
        )
    }


export default Button;