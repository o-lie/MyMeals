import classNames from "classnames";
import { ButtonLink } from "../types/util.types";
import { Link } from "react-router-dom";
import { isNotNull } from "../utils/typeguards";
import { Button as DuikButton } from "@duik/it";

type Props = {
	title: string,
	className?: string,
	text?: string,
	buttonPrimary?: ButtonLink
	buttonSecondary?: ButtonLink | undefined
}

function HeaderComponent(props: Props) {

	const {
		className,
		title,
		text,
		buttonPrimary,
		buttonSecondary
	} = props;

	return (
		<div className={
			classNames(
				"header",
				className
			)
		}>
			<div className="header__top">
				<h1 className="header__title">{ title }</h1>
				<div className="header__buttons">
					{
						isNotNull(buttonPrimary) &&
						<DuikButton primary Component={Link} to={ buttonPrimary.link }>
							{ buttonPrimary.title }
						</DuikButton>
					}
					{
						isNotNull(buttonSecondary) &&
                        <Link
                            to={ buttonSecondary.link }
                        >
							{ buttonSecondary.title }
                        </Link>
					}
				</div>
			</div>
			<div className="header__text"> { text }</div>
		</div>
	);
}

export default HeaderComponent;