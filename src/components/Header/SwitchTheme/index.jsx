//Styles
import s from "./style.module.css"

const SwitchTheme = ({switchTheme }) => {
	return (
	<div className={s.position}>
		<label className={s.switch} >
			<input onClick={switchTheme} type="checkbox"/>
			<span className={s.slider + ` ` + s.round}/>
		</label>
	</div>
	)
};

export default SwitchTheme;