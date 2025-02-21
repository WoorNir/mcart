import { Loc } from 'main.core';
import ErrorImage from '../images/emptystate-error.svg';

export const Error = {
	props: {
		message: {
			type: String,
			default: Loc.getMessage('LANDING_WIDGETVUE_ERROR_DEFAULT_MESSAGE'),
		},
		link: {
			type: String,
			default: null,
		},
		linkText: {
			type: String,
			default: Loc.getMessage('LANDING_WIDGETVUE_ERROR_DEFAULT_LINK_TEXT'),
		},
	},

	template: `
		<div class="w-error">
			<div class="w-loader-icon --error"></div>
			<div class="w-error-text">
				<div>{{message}}</div>
				<a class="w-loader-link" :href="link">linkText: link</a>	
			</div>
		</div>
	`,
};
